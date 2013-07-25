var express = require('express');
var fs = require('fs');
var app = express();
var buf = new Buffer();

app.use(express.logger());

app.get('/', function(request, response) {
  var info = fs.readFile(index.html);
  var b_string = buf.write(info);
  response.send(b_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
