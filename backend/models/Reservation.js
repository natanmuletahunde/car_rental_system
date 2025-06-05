const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Reservation', reservationSchema);