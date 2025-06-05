const express = require('express');
const router = express.Router();
const { getAllReservations, addReservation } = require('../controllers/reservationController');
const auth = require('../middleware/auth');

router.get('/reservations', auth, getAllReservations);
router.post('/reservations', auth, addReservation);

module.exports = router;