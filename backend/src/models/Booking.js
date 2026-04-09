const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pujaService: { type: mongoose.Schema.Types.ObjectId, ref: 'PujaService' },
  pandit: { type: mongoose.Schema.Types.ObjectId, ref: 'Pandit' },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' },
  address: { type: String },
  assignedAgent: { type: String },
  acceptanceTime: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('Booking', bookingSchema);