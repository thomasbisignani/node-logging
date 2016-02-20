var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var fs = require('fs');

var app = express();

// Setup and mount the morgan logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('common', {stream: accessLogStream}))

// Mount the router for all routes
app.use(router);

// Routes HTTP requests
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Home');
});
router.get('/foo', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('bar');
});

app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found');
});

// Running the server application
var server = app.listen(1337, function () {
    var port = server.address().port;
    console.log('Server is running on localhost:%s', port);
});
