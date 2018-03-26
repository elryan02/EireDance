//path requires the path module which allows you to parse files
var express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/turnout', function(req, res) {
  res.render('turnout', { name: "Wall Splits", duration: "00:01:00", isdone: false });
});

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
