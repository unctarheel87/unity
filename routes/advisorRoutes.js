const express = require('express');
const passport = require('passport');
const Advisor = require('../models/Advisor');
const router = express.Router();

router.get('/advisors', function(req, res) {
  Advisor.find({})
  .then(dbAdvisors => {
    res.json(dbAdvisors);
  }).catch(err => {
    console.log(err);
  })
})

router.post('/register', function(req, res) {
  Advisor.register(new Advisor({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) console.log(err)
    passport.authenticate('advisor-local')(req, res, function () {
      res.redirect('/');
    });
  });
});

router.get('/user', function(req, res) {
  if(req.user) {
    Advisor.findById(req.user.id)
    .populate({
      path: 'users',
      model: 'User',
      populate: [{
        path: 'messages',
        model: 'Message'
      }, {
        path: 'stocks',
        model: 'Stock'
      }]
    })
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

router.post('/login', passport.authenticate('advisor-local'), function(req, res) {
  console.log(req.user)
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  console.log(req.user)
  res.redirect('/');
});

module.exports = router;