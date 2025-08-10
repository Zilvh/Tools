const express = require('express');
const fs = require('fs');
const path = require('path');
const transporter = require('../index');
const router = express.Router();
const dataPath = path.join(__dirname, '../data/registrations.json');

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  const newRegistration = { id: data.length + 1, ...req.body, timestamp: new Date().toISOString() };
  data.push(newRegistration);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  await transporter.sendMail({
    from: '"HIMA RPL" <your-email@gmail.com>',
    to: 'admin-hima@example.com', // Ganti dengan email admin HIMA
    subject: 'Pendaftaran Baru HIMA RPL',
    text: `Pendaftaran baru dari ${newRegistration.name} (${newRegistration.email}, NIM: ${newRegistration.nim})`,
  });

  res.json(newRegistration);
});

module.exports = router;