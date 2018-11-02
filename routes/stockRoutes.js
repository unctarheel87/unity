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
  console.log(req.body)
  Stock.create({ticker: req.body.ticker}).then(dbStock => {
    return User.findOneAndUpdate({_id: req.user.id}, { 
      $push: { stocks: dbStock._id }
    }, { new: true } )
  }).then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => res.json(err));
});
 

module.exports = router