const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlist = new Schema(
    {

        //user will need to be adjust to how users are coming in

        name: { type: String, required: true },
        //is this grabbing user unique id??
        user: { type: mongoose.Schema.Types.ObjectId,
            ref:'user' },
    },
    { timestamps: true },
)

module.exports = mongoose.model('playlists', playlist)