const Review = require('../models/Review');
exports.addReview = async (req, res) => {
  try {
    const review = new Review({ ...req.body, user: req.user.id });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};