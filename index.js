var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  res.send('Hello from Docker!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// app is a callback function or an express application
module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(process.env.PORT, function(){
    console.log("Server listening on port " + app.get('port'));
  });
}
