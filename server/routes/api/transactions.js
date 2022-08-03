const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');

const createCharge = require('../../functions/createCharge');

const User = require('../../models/User');
const Transaction = require('../../models/Transactions');
const Payment = require('../../models/Payments');

const { TRANSACTION_NOT_FOUND, SERVER_ERROR, NO_USERNAME_FOUND, PAID_STATUS, CONFIRMED_STATUS, COMPLETE_STATUS, FORBIDDEN } = require('../../config/constants');

const sendMessageAndFunds = require('../../functions/sendMessageAndFunds');


/****************/
const redis = new IORedis(process.env.REDIS_URL, { maxRetriesPerRequest: null });
redis.connect(() => {
  console.log('Redis connected');
});

const transactionQueue = new Queue('transactionQueue', { connection: redis });

const transactionWoker = new Worker('transactionQueue', async (job) => {
  if (job.name === 'transaction') {
    const data = await sendMessageAndFunds(job.data);
    return data;
  }
}, { connection: redis });

transactionWoker.on('completed', job => {
  console.log(`${job.id} has completed!`);
});

transactionWoker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
/****************/


// @route    POST api/transactions
// @desc     Create a transaction
// @access   Public
router.post('/', async (req, res) => {
  const { username, message } = req.body;

  try {

    // Paso 1: compruebo si hay un user con ese username, si hay, obtengo el ID
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ msg: NO_USERNAME_FOUND });
    }

    const { id, lightning_invoice: { payreq }, status, amount, fiat_value, uri } = await createCharge(user.satoshisPerMessage);

    const newTransaction = new Transaction({
      receiverId: user._id,
      receiverUsername: user.username,
      receiverEmail: user.email,
      paymentId: id,
      paymentUrl: payreq,
      message: message,
      paid: status,
      amount: amount,
      fiatValue: fiat_value,
      uri: uri,
      qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(uri)}&size=[500]x[500]`
    });

    const transaction = await newTransaction.save();

    res.status(200).json({ status: 200, data: { transaction: {
      receiverId: user._id,
      receiverUsername: user.username,
      paymentId: id,
      paymentUrl: payreq,
      message: message,
      paid: status,
      amount: amount,
      fiatValue: fiat_value,
      uri: uri,
      qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(uri)}&size=[500]x[500]`
    } } });

  } catch (err) {
    console.error(err.message);
    res.status(500).send(SERVER_ERROR);
  }

});


// @route    GET api/transactions/:transactionId
// @desc     Get transaction data by id
// @access   Public
router.get('/:transactionId', async (req, res) => {

  const { transactionId } = req.params;

  try {
    let transaction = await Transaction.findById(transactionId);

    if (transaction) {
      res.status(200).json({ status: 200, data: { transaction } });
    } else {
      throw new Error(TRANSACTION_NOT_FOUND);
    }

  } catch (err) {
    res.status(500).json({ status: 500, error: { msg: err.message } });
  }

});


// @route    POST api/transactions/transactions-webhook
// @desc     Webhook for transactions from Opennode
// @access   Public
router.post('/transactions-webhook', async (req, res) => {

  const { id, status, hashed_order } = req.body;
  const calculated = crypto.createHmac('sha256', process.env.OPENNODE_PRODUCTION_KEY).update(id).digest('hex');

  if(status !== PAID_STATUS) return;

  if (hashed_order === calculated) {

    const filter = { paymentId: id };
    const update = { paid: status };

    try {

      // Update the transaction status to paid
      let transactionUpdated = await Transaction.findOneAndUpdate(filter, update);
      await transactionUpdated.save();

      // Setup data for queue
      const transactionQueueData = {
        receiverId: transactionUpdated.receiverId,
        receiverUsername: transactionUpdated.receiverUsername,
        receiverEmail: transactionUpdated.receiverEmail,
        message: transactionUpdated.message,
        amount: transactionUpdated.amount
      }

      await transactionQueue.add('transaction', { transactionQueueData });

      // Enviamos respuesta a opennode para que no lo envíen más
      res.status(200).json({ status: 200, data: { success: 'OK' } });

    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 500, error: { msg: err.message } });
    }

  } else {
    res.status(403).json({ status: 403, error: { msg: FORBIDDEN } });
  }

});


// @route    POST api/transactions/withdrawal-webhook
// @desc     Webhook for LNURL withdrawal from Opennode
// @access   Public
router.post('/withdrawal-webhook', async (req, res) => {

  const { id, status, hashed_order, lnurl_withdrawal } = req.body;
  
  if(!(status == CONFIRMED_STATUS || status == COMPLETE_STATUS)) return;

  const calculated = crypto.createHmac('sha256', process.env.OPENNODE_PRODUCTION_KEY).update(id).digest('hex');

  if (hashed_order === calculated) {

    const withdrawalJson = JSON.parse(lnurl_withdrawal);
    const withdrawalId = withdrawalJson.id;

    const filter = { opennodePaymentId: withdrawalId };
    const update = { used: status };
    
    try {
      let paymentUpdated = await Payment.findOneAndUpdate(filter, update);
      await paymentUpdated.save();

      res.status(200).json({ status: 200, data: { success: 'OK' } });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 500, error: { msg: err.message } });
    }

  } else {
    res.status(403).json({ status: 403, error: { msg: FORBIDDEN } });
  }

});


// @route    POST api/transactions/test/queue
// @desc     Test route for the Queue
// @access   Public
router.get('/prueba/cola', async (req, res) => {
  const transactionQueueData = {
    receiverId: '62e035d6df58f9027177fcae',
    receiverUsername: 'andreasdevjs@gmail.com',
    receiverEmail: 'andreasdevjs@gmail.com',
    message: 'Hola'
  }
  await transactionQueue.add('transaction', { transactionQueueData });
  res.json({ queued: true });
});


module.exports = router;