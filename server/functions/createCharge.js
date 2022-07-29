const opennode = require('opennode');
const { MINIMUM_SATOSHIS, WEBHOOK_CALLBACK_URL } = require('../config/constants');

opennode.setCredentials(process.env.OPENNODE_PRODUCTION_KEY, 'live');

module.exports = async function(chargeQuantity = MINIMUM_SATOSHIS ) {
  try {
    const charge = await opennode.createCharge({
      amount: chargeQuantity + (0.1 * chargeQuantity),
      auto_settle: false,
      callback_url: WEBHOOK_CALLBACK_URL
    });

    return charge;

  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
};