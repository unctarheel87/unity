const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StockSchema = new Schema({

  ticker: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  sector: {
    type: String,
    required: false,
    trim: true
  },
  price: {
    type: String,
    required: false,
    trim: true
  }
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;