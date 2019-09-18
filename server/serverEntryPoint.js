//Server entry point 

var express = require("express");
var db = require("./models");
var app = express();

//using app instead of http...we could GET put unable to POST
var http = require("http").createServer(app);
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Route
require("./routes/apiRoutes")(app);

http.listen(PORT, function() {
  console.log("Server started: http://localhost:%s/", PORT);
});

module.exports = app;


// -------------------------------------------------------------------


//example code from Movie-App
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const db = require('./db')
// const movieRouter = require('./routes/movie-router')

// const app = express()
// const apiPort = 3000

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/api', movieRouter)

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))