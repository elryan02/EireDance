//path requires the path module which allows you to parse files
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');

const mongoose = require('mongoose');

mongoose.connection.openUri(`mongodb://emma:emma@ds115569.mlab.com:15569/elrworkoutapp`);
require('./models/file.model.js');


const app = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use('/api', router);


app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
