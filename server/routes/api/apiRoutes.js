const router = require("express").Router();
var db = require("../../models");

var Playlist = require("../../models/playlist");
var Song = require("../../models/song");
var User = require("../../models/user");


//create new playlist
  router.route("/playlist").post(function(req, res) {
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
  router.route("/playlist/:id").get(function(req, res) {

    Song.find({ playlist : req.params.id }).populate("playlists").exec(function(error, results) {
        res.send((error) ? error : results);
   });
  });

//Populating playlists with songs
  router.route("/song").post(function(req, res) {
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

  //user creation for test html
  router.route("/user").post(function(req, res) {
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      register_date: req.body.register_date

    });
    newUser.save(function(error){
      if(error){

      } else {
        res.json(newUser);
      };
    });
  });

module.exports = router;