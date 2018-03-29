//path requires the path module which allows you to parse files
const path = require('path');
const router = require('./routes');

const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.use('/api', router);

app.use(function(req, res, next) {
  console.log("req.body BEFORE parsing", req.body);
  next();
})

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("req.body AFTER parsing", req.body);
  next();
})

app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
