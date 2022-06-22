const opennode = require('opennode');
const productionKey = '11bd176e-c07e-4d4c-8499-b85d66389757';
const developmentKey = '9af3ea86-ff5a-482a-b5c9-a4889bd62bb7';
opennode.setCredentials(productionKey, 'live'); // if no parameter given, default environment is 'live';

module.exports = async function(chargeQuantity) {
  try {
    const charge = await opennode.createCharge({
      amount: chargeQuantity,
      auto_settle: false,
      callback_url: 'https://9930-2-136-67-192.ngrok.io/api/transactions/webhooks'
    });

    return charge;

  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
};