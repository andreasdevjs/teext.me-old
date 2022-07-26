const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  receiver: { // destinatario del pago
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  paymentId: { // id del pago creado con opennode
    type: String 
  },
  paymentUrl: { // url de pago creada por opennode
    type: String,
    required: true
  },
  message: { // el mensaje que se quiere enviar
    type: String,
    required: true
  },
  paid: { // estado de la transacción: unpaid | paid
    type: String,
    required: true
  }, 
  amount: { // cantidad a pagar
    type: Number
  },
  fiatValue: {
    type: String
  },
  uri: {
    type: String
  },
  qrImageUrl: {
    type: String
  }
});

module.exports = mongoose.model('transactions', TransactionSchema);