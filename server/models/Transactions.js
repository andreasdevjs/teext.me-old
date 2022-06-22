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
  }
});

module.exports = mongoose.model('transactions', TransactionSchema);