const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  content: String,
  image: String
});

module.exports = mongoose.model('Lesson', lessonSchema);