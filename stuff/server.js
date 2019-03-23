var express = require('express');

var app = express();

app.listen(3000);

app.use('/frontend', express.static('frontend'));
console.log("Listening on port 3000");
app.get("/", function(req,res){
  res.sendFile(__dirname + "/frontend/index.html");
});
