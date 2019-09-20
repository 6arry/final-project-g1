const router = require("express").Router();
var db = require("../../db");

var Playlist = require("../../models/playlist");
var Song = require("../../models/song");
var User = require("../../models/user");


//create new playlist
  router.route("/playlist").post(function(req, res) {
    var plist = new Playlist({
        name : req.body.name,
        user: req.session.UID
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
//Garry, use this route to populate the user playlist on sidebar
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

  //user creation 
  router.route("/user").post(function(req, res) {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password,
    });
    newUser.save(function(error){
      if(error){ res.json(error);

      } else {
        req.session.UID = newUser._id;
        req.session.UNAME = newUser.name;

        var plist = new Playlist({
          name : "playlist",
          user: req.session.UID
            });
            plist.save(function(error){
                if(error){ res.json(error)
        
                } else {
                  res.redirect("/");
                }
            })
      };
    });
  });

  //fetching user from DB
  router.route("/user/:id").get(function(req, res) {

    User.find({ user : req.params.id }).populate("users").exec(function(error, results) {
        res.send((error) ? error : results);
   });
  });

  //front end user's playlist display
  router.route("/userPlaylist").get(function(req, res) {
  
    var uid = (req.session.UID) ? req.session.UID : "";
    
    Playlist.findOne({ user : uid }).exec(function(error, results) {
      if (!error) {
        Song.find({ playlist : results._id })
          .populate('playlist')
          .exec(function(error, results) {
            console.log(results);
            res.send((error) ? error : results);
        });
      } else res.send("[ ]");
    });
    
  });

module.exports = router;