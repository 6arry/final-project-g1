// eslint-disable-next-line no-unused-vars
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const routes = require('./routes/api/items');

const app = express();

const db = require('./config/keys').mongoURI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected...'))
    .catch(err =>console.log(err));

app.use('./routes/api/items', items);

    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

