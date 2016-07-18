var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');

/*eslint-disable no-console */

var port = 3000;
var app = express();

app.use(compression());
app.use(express.static(__dirname + '/resources'));
app.use(express.static('dist'));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function() {
    console.log('Server up and running on port '+port+'!');
});
