require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();

// Middleware for express
app.use(express.json());

// DB Config
const db = require('../config/key').mongoDB_URI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Server Connected'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is on port ${port}`));
