const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route
require('./routes/apiRoutes')(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:%s/, ${PORT}`);
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
