#!/usr/bin/env node

//var debug = require('debug')('passport-mongo');
var app = require('./app');


app.set('port', process.env.PORT || 4001);


var server = app.listen(4001, function() {
  console.log('Example app listening on port 4001!');
});
