const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const dns = require('dns');
dns.setServers(['8.8.8.8'], ['8.8.4.4'])

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pandits', require('./routes/panditRoutes'));
app.use('/api/pujas', require('./routes/pujaRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));

// Error Handler
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));