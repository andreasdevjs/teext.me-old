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
      return res.status(404).json({ message: 'User not found' });
    }

    // TODO: esto muestra el teext.me/username , habría que obtener la cantidad de satoshis o no mandarlo.
    res.json(user);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
    
  const { username, email, password, emailForMessages, satoshisPerMessage } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
      .status(400)
      .json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      username,
      email,
      password,
      emailForMessages: emailForMessages ? emailForMessages : email,
      satoshisPerMessage
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
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
  
});

module.exports = router;