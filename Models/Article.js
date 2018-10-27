const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: false,
    trim: true
  },
  link: {
    type: String,
    required: false,
    trim: true
  },
  stock: {
    type: Schema.Types.ObjectId,
    ref: "Stock"
  }
  
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;