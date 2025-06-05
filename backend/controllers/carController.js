const Car = require('../models/Car');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addCar = async (req, res) => {
  const { make, model, year, dailyRate, imageUrl } = req.body;
  try {
    const car = new Car({ make, model, year, dailyRate, imageUrl });
    await car.save();
    res.json(car);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateCar = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
    res.json(car);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    await Car.findByIdAndDelete(id);
    res.json({ msg: 'Car deleted' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};