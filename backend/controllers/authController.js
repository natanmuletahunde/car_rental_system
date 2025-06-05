const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');

exports.register = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    let customer = await Customer.findOne({ email });
    if (customer) return res.status(400).json({ msg: 'User already exists' });

    customer = new Customer({ name, email, password, phone, address });
    const salt = await bcrypt.genSalt(10);
    customer.password = await bcrypt.hash(password, salt);
    await customer.save();

    const payload = { id: customer._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { id: customer._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
};