const express = require('express');
const router = express.Router();

const { data } = require('C:/Users/Emma/desktop/clproject/data/turnoutData.json'); /* CAREFUL!! relative path wasn't working so you made an absolute path. Make sure you update if you change the directory. */
const { turnout } = data;

router.get('/', function(req, res) {
  res.render('turnout');
});

router.post('/', function(req, res) {
  res.render('turnout', { name: req.body.name, time: req.body.time, isdone: false});
 });


module.exports = router;
