const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  emailForMessages: {
    type: String,
  },
  satoshisPerMessage: {
    type: Number,
    default: 1000
  },
  isActive: {
    type: Boolean
  }
});

module.exports = mongoose.model('user', UserSchema);