// modules ===
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

// configuration ===
var db = require('./config/db');
app.set('superSecret', db.secret); // secret variable

// set port
var port = process.env.PORT || 4001;

// set default data folder
var dataFolder = './';

if (process.env.NODE_ENV === 'production') {
  // port = 80;
  dataFolder = './dist'
}

// connect to mongoDB
mongoose.connect(db.url);

// get all data of the body (POST) params
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files
app.use(express.static(dataFolder));

// routes ===
require('./routes')(app);

// start app ===
app.listen(port);

// notify the user
console.log('App is running on the port: ' + port);

// expose app
exports = module.exports = app;
