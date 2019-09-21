//login route
const router = require("express").Router();
var User = require("../../models/user");

router.route("/login").post(function(req, res) {

    User.findOne({ name: req.body.username, password: req.body.password }).exec(function(error, results) {
       
        if(!error) {
            req.session.UID = results._id;
            req.session.UNAME = results.name;
        }
              res.redirect("/");
   });
  });

module.exports = router;