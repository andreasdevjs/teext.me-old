const express = require('express');
const router = express.Router();

const opennode = require('opennode');
opennode.setCredentials(process.env.OPENNODE_PRODUCTION_KEY, 'live');


// @route    GET api/rates
// @desc     Get all BTC rates
// @access   Public
router.get('/', async (req, res) => {

  try {
    const ratesData = await opennode.listRates();
    res.status(200).json(ratesData);
  } catch (err) {
    res.status(500).json({ status: 500, error: { msg: SERVER_ERROR } });
  }
  
});


// @route    GET api/rates/:rateName
// @desc     Get BTC rate by Rate Name (BTCUSD, BTCEUR)
// @access   Public
router.get('/:rateName', async (req, res) => {

  try {
    const ratesData = await opennode.listRates();
    if(!ratesData[req.params.rateName]) throw new Error('Rate name not found');
    res.status(200).json(ratesData[req.params.rateName]);
  } catch (err) {
    res.status(404).json({ status: 404, error: { msg: err.message } });
  }
  
});


module.exports = router;