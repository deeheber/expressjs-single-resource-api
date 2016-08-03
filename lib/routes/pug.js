const express = require('express');
const router = express.Router();

module.exports = router
.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
