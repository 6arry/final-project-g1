const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config'); // ADDED FOR LOGIN

const app = express();

app.use(express.json());

console.log(config.get('mongoURI'));
const db = config.get('mongoURI'); // ADDED FOR LOGIN

mongoose                                              // MONGOOSE CONNECT ALTERED FOR LOGIN
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users')); // ADDED FOR LOGIN
app.use('/api/auth', require('./routes/api/auth')); // ADDED FOR LOGIN


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));