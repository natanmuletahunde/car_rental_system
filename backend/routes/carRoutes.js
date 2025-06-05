const express = require('express');
const router = express.Router();
const { getAllCars, addCar, updateCar, deleteCar } = require('../controllers/carController');
const auth = require('../middleware/auth');

router.get('/cars', auth, getAllCars);
router.post('/cars', auth, addCar);
router.put('/cars/:id', auth, updateCar);
router.delete('/cars/:id', auth, deleteCar);

module.exports = router;