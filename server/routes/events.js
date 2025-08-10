const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const router = express.Router();
const dataPath = path.join(__dirname, '../data/events.json');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
});

router.post('/', authenticate, (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  const newEvent = { id: data.length + 1, ...req.body };
  data.push(newEvent);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json(newEvent);
});

module.exports = router;