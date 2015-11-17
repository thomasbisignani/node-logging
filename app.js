var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home');
});
app.get('/foo', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('bar');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found');
});

app.listen(1337);
console.log("Server running...");
