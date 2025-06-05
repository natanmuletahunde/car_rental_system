const express = require('express');
const router = express.Router();
const { getAllAppointments, addAppointment } = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

router.get('/appointments', auth, getAllAppointments);
router.post('/appointments', auth, addAppointment);

module.exports = router;