const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

router.get('/', function(req, res) {
  Stock.find({})
    .then(response => console.log(response))
    .catch(err => console.log(err))
});

router.post('/', function(req, res) {
  console.log(req.body)
  Stock.create({ticker: req.body.ticker})
    .then(response => console.log(response))
    .catch(err => console.log(err))
});

module.exports = router