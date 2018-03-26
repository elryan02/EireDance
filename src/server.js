//path requires the path module which allows you to parse files
var express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/hello', function(req, res) {
  res.send('<h1>whaaat</h1>')
});

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
