//path requires the path module which allows you to parse files
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

const mainRoutes = require('./routes')
const turnoutRoutes = require('./routes/turnout')

app.use(mainRoutes);

app.use('/turnout', turnoutRoutes);

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
