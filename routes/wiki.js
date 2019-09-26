const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  res.send('hello');
});

router.post('/', async (req, res, next) => {
  res.send('post');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
