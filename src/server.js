//path requires the path module which allows you to parse files
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/turnout', function(req, res) {
  res.render('turnout');
});

app.post('/turnout', function(req, res) {
  res.render('turnout', { name: req.body.name, time: req.body.time, isdone: false});
});

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
