//Server entry point 
var express = require("express");
var session = require("express-session");

// var db = require("./db");
var app = express();
const routes = require("./routes");

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'catdog2354234',
  resave: false,
  saveUninitialized: true
}));

// Serve up static assets (usually on heroku)
app.use(express.static("../client/build"));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;

