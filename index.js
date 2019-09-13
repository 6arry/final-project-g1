// require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
var bodyParser = require("body-parser");
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

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   http.listen(PORT, function() {
//     console.log(
//       "Listening on port %s. http://localhost:%s/",
//       PORT,
//       PORT
//     );
//   });
// });

module.exports = app;