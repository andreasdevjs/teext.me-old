const opennode = require('opennode');
const sendEmail = require('./sendEmail');

const Payment = require('../models/Payments');

const { WITHDRAWAL_WEBHOOK_CALLBACK_URL } = require('../config/constants');

opennode.setCredentials(process.env.OPENNODE_PRODUCTION_KEY, 'live');

module.exports = async function(data) {

  const { receiverId, receiverEmail, message, amount } = data.transactionQueueData;

  try {

    // 1º Send the email to the user
    const email = await sendEmail(receiverEmail, message);

    // 2º Create the LNURL QR for the withdrawal
    const lnurl = await opennode.createLnUrlWithdrawal({ 
      min_amt: Number(amount - (amount / 10)),
      max_amt: Number(amount - (amount / 10)),
      callback_url: WITHDRAWAL_WEBHOOK_CALLBACK_URL,
      description: '[NEW MESSAGE SENT]'
    });

    // 3º Creamos un nuevo PAYMENT y lo asociamos al user (ref type)
    const newPayment = new Payment({
      receiverId: receiverId,
      opennodePaymentId: lnurl.id,
      used: lnurl.used,
      lnurlQR: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(lnurl.lnurl)}&size=[500]x[500]`,
      lnurl: lnurl.lnurl,
      amount: lnurl.max_amt
    });

    await newPayment.save();

    return newPayment;

  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
};