const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = '928293939393';

const User = require('../../models/User');


// @route    GET api/users/:username
// @desc     Get user by username
// @access   Public
router.get('/:username', async (req, res) => {

  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(400).json({ status: 400, error: { msg: 'User not found' } });
    }

    res.status(200).json({ status: 200, data: { user } });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: 500, error: { msg: err.message } });
  }
  
});


// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
    
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ status: 400, error: { msg: 'User already exists' } });
    }

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign( payload, secret, { expiresIn: '30 days' }, (err, token) => {
      if (err) throw err;
        res.status(200).json({ status: 200, data: { token } });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: 500, error: { msg: err.message } });
  }
  
});

module.exports = router;