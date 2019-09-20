// place mongoose connection here

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://djadmin:djpassword123@ds217438.mlab.com:17438/heroku_sz4drf5d', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db