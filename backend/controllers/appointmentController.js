const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('customerId');
    res.json(appointments);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addAppointment = async (req, res) => {
  const { customerId, date, purpose } = req.body;
  try {
    const appointment = new Appointment({ customerId, date, purpose });
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).send('Server error');
  }
};