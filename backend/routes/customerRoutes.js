const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controllers/customerController');
const auth = require('../middleware/auth');

router.get('/customers', auth, getAllCustomers);

module.exports = router;