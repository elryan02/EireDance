const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.render('turnout');
});

router.post('/', function(req, res) {
  res.render('turnout', { name: req.body.name, time: req.body.time, isdone: false});
 });


module.exports = router;