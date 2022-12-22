const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Blogs = new mongoose.model("Blog", scheme);

module.exports = Blogs;
