const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('carId customerId');
    res.json(reservations);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addReservation = async (req, res) => {
  const { carId, customerId, startDate, endDate, totalCost } = req.body;
  try {
    const reservation = new Reservation({ carId, customerId, startDate, endDate, totalCost });
    await reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(500).send('Server error');
  }
};