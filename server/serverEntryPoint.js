//Server entry point 

var express = require("express");
var db = require("./models");
var app = express();
var http = require("http").createServer(app);
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));



// Route
require("./routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
};

http.listen(PORT, function() {
  console.log("Server started: http://localhost:%s/", PORT);
});

module.exports = app;