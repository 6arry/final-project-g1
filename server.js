//eslint-disable-next-line no-unused-vars
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const routes = require('./routes/api/items');

app.use(routes);

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected...'))
    .catch(err =>console.log(err));

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

