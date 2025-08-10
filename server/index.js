const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const newsRoutes = require('./routes/news');
const registrationRoutes = require('./routes/registrations');
const quizRoutes = require('./routes/quiz');

const app = express();

app.use(cors());
app.use(express.json());

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Ganti dengan email HIMA
    pass: 'your-app-password', // Gunakan App Password dari Gmail
  },
});

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/quiz', quizRoutes);

app.listen(5000, () => console.log('Server berjalan di http://localhost:5000'));
module.exports = transporter;