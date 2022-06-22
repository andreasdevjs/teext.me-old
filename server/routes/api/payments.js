const express = require('express');
const router = express.Router();
const opennode = require('opennode');

const productionKey = '11bd176e-c07e-4d4c-8499-b85d66389757';
const developmentKey = '9af3ea86-ff5a-482a-b5c9-a4889bd62bb7';

opennode.setCredentials(productionKey, 'live'); //if no parameter given, default environment is 'live';

router.get('/', async (req, res) => {
  res.json('Get payments');
});


// @route    POST api/payments
// @desc     Create a payment
// @access   Public
router.post('/', async (req, res) => {

  try {
    const charge = await opennode.createCharge({
      amount: 1000,
      callback_url: "https://fda3-2a02-2e02-3a30-5800-409c-a3ac-4f95-dd71.eu.ngrok.io/api/payments/webhooks", // cambiar con ngrock para development
      auto_settle: false
    });

    res.send(JSON.stringify(charge));
  }
  catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
});

router.post('/webhooks', async (req, res) => {
  console.log(req);
  res.json(req.body);
});

module.exports = router;