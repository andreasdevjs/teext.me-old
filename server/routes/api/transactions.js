const express = require('express');
const router = express.Router();

const createCharge = require('../../functions/createCharge');
const User = require('../../models/User');
const Transaction = require('../../models/Transactions');


// @route    POST api/transactions
// @desc     Create a transaction
// @access   Public
router.post('/', async (req, res) => {
  const { username, message } = req.body;

  try {

    // Paso 1: compruebo si hay un user con ese username, si hay, obtengo el ID
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ msg: 'Sorry, there is no user with this username' });
    }

    const { id, lightning_invoice: { payreq }, status, amount, fiat_value, uri } = await createCharge(user.satoshisPerMessage);

    const newTransaction = new Transaction({
      receiver: user._id,
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

    res.json(transaction);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  // Paso 3: Se coge el mensaje enviado por el usuario

  // Paso 4: Se pone en estado unpaid

  // Paso 5: se crea una nueva instancia de transaction.

  // Paso 6: se envía al cliente un json con la url de pago para que pueda pagar

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
      throw new Error('Payment not found');
    }

  } catch (err) {
    res.status(500).json({ status: 500, error: { msg: err.message } });
  }

});


// @route    POST api/transactions/webhooks
// @desc     Webhook for transactions from Opennode
// @access   Public
router.post('/webhooks', async (req, res) => {
  console.log(req.body);

  const { id, status } = req.body;

  const filter = { paymentId: id };
  const update = { paid: status };

  let transactionUpdated = await Transaction.findOneAndUpdate(filter, update);
  await transactionUpdated.save();

  console.log(transactionUpdated);
});


module.exports = router;