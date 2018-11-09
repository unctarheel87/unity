const express = require('express');
const Stock = require('../models/Stock');
const User = require('../models/User');
const router = express.Router();

router.get('/', function(req, res) {
  Stock.find({})
    .then(response => console.log(response))
    .catch(err => console.log(err))
});

router.post('/', function(req, res) {
  Stock.create({ticker: req.body.ticker}).then(dbStock => {
    return User.findOneAndUpdate({ _id: req.user.id }, { 
      $push: { stocks: dbStock._id }
    }, { new: true } )
  }).then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => res.json(err));
});

router.delete('/:id', function(req, res) {
  Stock.deleteOne({ _id: req.params.id }).then(dbStock => {
      return User.findOneAndUpdate({ _id: req.user.id }, {
        $pull: { stocks: req.params.id }});
      })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.json(err));
});
 

module.exports = router