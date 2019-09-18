var db = require("../models");

var Playlist = require("../models/playlist");
var Song = require("../models/song");

module.exports = function(app) {



//create new playlist
  app.post("/playlist", function(req, res) {
    var plist = new Playlist({
        name : req.body.name,
        user: req.body.user
    });
    plist.save(function(error){
        if(error){

        } else {
            res.json(plist);
        }
    })
  });

//fetching playlist from DB
  app.get("/playlist/:id", function(req, res) {

    Song.find({ playlist : req.params.id }).populate("playlists").exec(function(error, results) {
        res.send((error) ? error : results);
   });
  });

//Populating playlists with songs
  app.post("/song", function(req, res) {
      var newSong = new Song({
        name: req.body.name,
        artist: req.body.artist,
        URL: req.body.URL,
        playlist: req.body.playlist

      });
      newSong.save(function(error){
        if(error){

        } else {
            res.json(newSong);
        };
    });
  });

};