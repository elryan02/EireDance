const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/turnout', function(req, res) {
  res.render('turnout');
});

module.exports = router;
