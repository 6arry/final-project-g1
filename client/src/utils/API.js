import axios from "axios";

export default {
  // Gets user's playlist
  getPlaylist: function() {
    return axios.get("/api/userPlaylist");
  },
  // Saves a playlist to the database
  savePlaylist: function(playlistData) {
    return axios.post("/api/playlist", playlistData);
  },
  //entersong to database for active user's playlist
  postSong: function(songData) {
    return axios.post("/api/song", songData);
  }
};


//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);