var express = require('express');
var app = express();

var args = process.argv;
var port = parseInt(args[2]);

var port = (process.env.VCAP_APP_PORT || (port || 8003));
var host = (process.env.VCAP_APP_HOST || '0.0.0.0');

app.get('/', function (req, res) {
  res.send('Hello world to test realtime deployment!! Server: '+ host +', Port: '+ port);
});

console.log("Listening on " + host + ":" + port);
console.log("process.env.VCAP_APP_PORT " + process.env.VCAP_APP_PORT);
console.log("process.env.VCAP_APP_HOST " + process.env.VCAP_APP_HOST);

app.listen(port, host);
