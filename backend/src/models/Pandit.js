const mongoose = require('mongoose');
const panditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  experience: { type: Number },
  specialties: [{ type: String }],
  bio: { type: String },
  rating: { type: Number, default: 0 },
}, { timestamps: true });
module.exports = mongoose.model('Pandit', panditSchema);