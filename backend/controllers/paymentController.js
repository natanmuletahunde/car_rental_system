const Payment = require('../models/Payment');

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('reservationId');
    res.json(payments);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addPayment = async (req, res) => {
  const { reservationId, amount, method } = req.body;
  try {
    const payment = new Payment({ reservationId, amount, method });
    await payment.save();
    res.json(payment);
  } catch (error) {
    res.status(500).send('Server error');
  }
};