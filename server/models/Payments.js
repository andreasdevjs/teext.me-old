const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
  receiverId: { // destinatario del pago
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  opennodePaymentId: { // id asignado por Opennode al pago LNURL
    type: String
  },
  used: { // estado de pago (confirmed, complete o failed)
    type: String
  },
  lnurlQR: { // url del qr creado con la api
    type: String
  },
  lnurl: { // la lnurl que nos da Opennode
    type: String
  },
  amount: { // cantidad del withdrawal (max_amt de Opennode)
    type: Number
  }
});

module.exports = mongoose.model('payments', PaymentsSchema);