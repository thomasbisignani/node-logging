var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

var app = express();

// Create stream
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

// Setup and use the logger
app.use(morgan('common', {stream: accessLogStream}))

// Routes HTTP requests
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home');
});
app.get('/foo', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('bar');
});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found');
});

// Running the server application
var server = app.listen(1337, function () {
  var port = server.address().port;
  console.log('Server is running on localhost:%s', port);
});
