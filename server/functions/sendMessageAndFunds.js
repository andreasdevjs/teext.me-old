const opennode = require('opennode');
const sendEmail = require('./sendEmail');

const User = require('../models/User');

opennode.setCredentials(process.env.OPENNODE_PRODUCTION_KEY, 'live');

module.exports = async function(data) {
  console.log(data.transactionQueueData);

  const { receiverId, receiverUsername, receiverEmail, message } = data.transactionQueueData;

  try {

    // 1º Send the email to the user
    const email = await sendEmail(receiverEmail, message);

    // 2º Create the LNURL QR for the withdrawal
    const lnurl = await opennode.createLnUrlWithdrawal({ 
      min_amt: 500,
      max_amt: 500,
      callback_url: 'https://andreas.free.beeceptor.com',
      description: 'New Message'
    });
  
    // 3º Insert the LNURL to the user
    const user = await User.findOneAndUpdate(
      { "_id" : receiverId },
      { $push: { "payments" : { used: lnurl.used, lnurlQR: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(lnurl.lnurl)}&size=[500]x[500]`, amount: lnurl.max_amt }}},
      { safe: true, upsert: true, new: true}
    );

    return user;

  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
};