const Booking = require('../models/Booking');
exports.createBooking = async (req, res) => {
  try {
    const newBooking = new Booking({ ...req.body, user: req.user.id });
    const booking = await newBooking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getBookings = async (req, res) => {
  try {
    let bookings;
    if (req.user.role === 'Admin') {
      bookings = await Booking.find().populate('user', 'email name phone');
    } else {
      bookings = await Booking.find({ user: req.user.id }).populate('user', 'email name phone');
    }
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status, assignedAgent, acceptanceTime } = req.body;
    let updateFields = {};
    if (status) updateFields.status = status;
    if (assignedAgent) updateFields.assignedAgent = assignedAgent;
    if (acceptanceTime) updateFields.acceptanceTime = acceptanceTime;

    const booking = await Booking.findByIdAndUpdate(req.params.id, updateFields, { new: true }).populate('user', 'email name phone');
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};