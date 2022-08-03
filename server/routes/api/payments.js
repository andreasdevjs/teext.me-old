const express = require('express');
const router = express.Router();

const opennode = require('opennode');
opennode.setCredentials(process.env.OPENNODE_PRODUCTION_KEY, 'live');

const Payment = require('../../models/Payments');


// @route    GET api/payments
// @desc     Get all payments
// @access   Public
router.get('/', async (req, res) => {
  try {
    const allPayments = await Payment.find();
    if(!allPayments.length > 0) res.status(204).json({ status: 204, data: [] });
    res.status(200).json({ status: 200, data: { allPayments } });
  } catch (err) {
    res.status(500).json({ status: 500, error: { msg: SERVER_ERROR } });
  }
});


// @route    GET api/payments/:paymentId
// @desc     Get payment by id
// @access   Public
router.get('/:paymentId', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.paymentId);
    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
    res.status(200).json({ status: 200, data: { payment } });
  } catch (err) {
    res.status(404).json({ status: 404, error: { msg: err.message } });
  }
});


module.exports = router;