//path requires the path module which allows you to parse files
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

app.use('/static', express.static('public')); /* This links pug to css */

const mainRoutes = require('./routes')
const tExerciseRoutes = require('./routes/tExercises')

app.use(mainRoutes);

app.use('/tExercises', tExerciseRoutes);

app.listen(3030, function() {
  console.log('Server listening on localhost3030')
});
