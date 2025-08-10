const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataPath = path.join(__dirname, '../data/quiz-scores.json');

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
});

router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  const newScore = { id: data.length + 1, ...req.body, timestamp: new Date().toISOString() };
  data.push(newScore);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json(newScore);
});

module.exports = router;