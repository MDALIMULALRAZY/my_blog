const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

// * mongoose slug generator options
const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};
mongoose.plugin(slug, options);

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'title', 
    unique: true
  },
  details: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", postSchema);