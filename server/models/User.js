const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: 25
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
  phoneNumber: {
    type: String
  },
  isActive: {
    type: Boolean
  },
  hasMadeAnyWithdrawal: {
    type: Boolean,
    default: false
  },
  hasReceivedAnyMessage: {
    type: Boolean,
    default: false
  },
  location: {
    type: String
  }
});

module.exports = mongoose.model('user', UserSchema);