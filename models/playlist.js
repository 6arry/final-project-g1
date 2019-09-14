const mongoose = require('mongoose')
;
const {Schema} = mongoose;

const playlist = new Schema(
  {
    // user will need to be adjust to how users are coming in

    name: { type: String, required: true },
    user: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('playlists', playlist);
