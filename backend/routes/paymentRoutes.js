const express = require('express');
const router = express.Router();
const { getAllPayments, addPayment } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.get('/payments', auth, getAllPayments);
router.post('/payments', auth, addPayment);

module.exports = router;