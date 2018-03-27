//path requires the path module which allows you to parse files
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const turnoutRoutes = require('./routes/turnout')

app.use(mainRoutes);
app.use('/turnout', turnoutRoutes);

app.use(function(req, res, next){
  console.log('One');
  const err = new Error('Oh no!');
  err.status = 500;
  next(err);
});


app.use(function(req, res, next){
  const err = new Error('not found');
  err.status = 404;
  next();

});

app.use(function(err, req, res, next) {
  res.status(err.status);
  res.render('error', err);

});

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
