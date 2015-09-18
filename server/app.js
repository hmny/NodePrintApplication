var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./routes/index');

/**
 * using bodyParser
 */
app.use(bodyParser.json());								// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));		// to parse non-json requests 

/**
 * defining routes
 */
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'tmp')));

module.exports = app;