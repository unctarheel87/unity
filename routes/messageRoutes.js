const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const router = express.Router();

router.get('/', function(req, res) {
  Message.find({})
    .then(response => console.log(response))
    .catch(err => console.log(err))
});

router.post('/', function(req, res) {
  Message.create({ message: req.body.message, author: req.user.username }).then(dbMsg => {
    return User.findOneAndUpdate({ _id: req.body.userId }, { 
      $push: { messages: dbMsg._id }
    }, { new: true } )
  }).then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => res.json(err));
});

router.delete('/:id', function(req, res) {
  Message.deleteOne({ _id: req.params.id }).then(dbMsg => {
      return User.findOneAndUpdate({ _id: req.user.id }, {
        $pull: { messages: req.params.id }});
      })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.json(err));
});
 

module.exports = router;