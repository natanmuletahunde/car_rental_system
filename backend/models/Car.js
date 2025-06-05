const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  dailyRate: { type: Number, required: true },
  imageUrl: { type: String },
});

module.exports = mongoose.model('Car', carSchema);