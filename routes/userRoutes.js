const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const Advisor = require('../models/Advisor');
const router = express.Router();

router.post('/register', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) console.log(err)
    Advisor.findOneAndUpdate( {_id: req.body.advisor }, {
      $push: { users: user._id }
    }, { new: true } ).then(dbAdvisor => {
      passport.authenticate('user-local')(req, res, function () {
        res.json('successfully registered');
      });
    }).catch(err => console.log(err));
  });
});

router.get('/user', function(req, res) {
  if(req.user) {
    User.findById(req.user.id)
    .populate('stocks')
    .then(dbUser => {
      console.log(dbUser)
      res.json({user: dbUser} );
    }).catch(err => {
      console.log(err);
    })
  } else {
    res.end()
  }
});

router.post('/login', passport.authenticate('user-local'), function(req, res) {
  console.log(req.user)
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  console.log(req.user)
  res.redirect('/');
});

module.exports = router;