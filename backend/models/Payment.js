const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  reservationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  method: { type: String, enum: ['credit', 'debit', 'cash'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
});

module.exports = mongoose.model('Payment', paymentSchema);