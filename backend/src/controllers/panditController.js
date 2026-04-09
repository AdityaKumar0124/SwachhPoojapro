const Pandit = require('../models/Pandit');
exports.getPandits = async (req, res) => {
  try {
    const pandits = await Pandit.find().populate('userId', '-password');
    res.json(pandits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};