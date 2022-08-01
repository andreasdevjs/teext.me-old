const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const { USER_NOT_FOUND, INVALID_CREDENTIALS, DEFAULT_JWT_EXPIRATION } = require('../../config/constants');


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', async (req, res) => {

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: 404, error: { msg: USER_NOT_FOUND } });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ status: 400, error: { msg: INVALID_CREDENTIALS } });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.BCRYPTJS_SECRET, { expiresIn: DEFAULT_JWT_EXPIRATION }, (err, token) => {
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