var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    console.log(newTable);
    res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
    var newWaitlist = req.body;
    console.log(newWaitlist);
    res.json(newWaitlist);
});


app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});