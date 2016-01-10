var express  = require('express');

var app      = express();

var mongoose = require('mongoose');

var logger = require('morgan');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/activity');
require('./model/Activity');

app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var index = require('./route/index');
app.use('/', index);


app.listen(8080);

console.log("Running on localhost port 8080");
