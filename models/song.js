const mongoose = require('mongoose');

const { Schema } = mongoose;

const song = new Schema(
  {
    name: { type: String, required: true },
    artist: { type: [String], required: true },
    URL: { type: String, required: true },
    playlist: { type: mongoose.Schema.Types.ObjectId, ref: 'playlists' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('songs', song);
