const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = '928293939393';

const User = require('../../models/User');


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', async (req, res) => {

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ status: 404, error: { msg: 'User not found' } });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ status: 400, error: { msg: 'Invalid Credentials' } });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, secret, { expiresIn: '30 days' }, (err, token) => {
        if (err) throw err;
        res.status(200).json({ status: 200, data: { token } });
      });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 500, error: { msg: err.message } });
    }
  }
);

module.exports = router;