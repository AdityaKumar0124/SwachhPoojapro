const PujaService = require('../models/PujaService');
exports.getPujas = async (req, res) => {
  try {
    const pujas = await PujaService.find();
    res.json(pujas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};