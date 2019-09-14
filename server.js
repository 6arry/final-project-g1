// // require("dotenv").config();
// var express = require("express");
// // var exphbs = require("express-handlebars");
// var db = require("./models");
// var app = express();
// var bodyParser = require("body-parser");
// var http = require("http").createServer(app);
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static(__dirname + '/public'));



// // Route
// require("./routes/apiRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// };



// //reference Unit 20 activity 7, 
// //app.get
// http.listen(PORT, function() {
//   console.log("Server started: http://localhost:%s/", PORT);
// });

// // Starting the server, syncing our models ------------------------------------/
// // db.sequelize.sync(syncOptions).then(function() {
// //   http.listen(PORT, function() {
// //     console.log(
// //       "Listening on port %s. http://localhost:%s/",
// //       PORT,
// //       PORT
// //     );
// //   });
// // });


// //place mongoose connection in this file. 

// module.exports = app;




//Johns routing code

//eslint-disable-next-line no-unused-vars
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3000;
const routes = require('./routes/apiRoutes');
app.use(routes);
const db = require('./client/config/keys').mongoURI;
mongoose
   .connect(db)
   .then(() => console.log('Mongo DB Connected...'))
   .catch(err =>console.log(err));
   app.listen(PORT, () => console.log('Server started on port ${PORT}'));


