const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  content: String,
  image: String
});

module.exports = mongoose.model('Story', storySchema);