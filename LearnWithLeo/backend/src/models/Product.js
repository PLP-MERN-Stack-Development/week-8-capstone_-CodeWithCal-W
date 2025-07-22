const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  age: String,
  type: String,
});

module.exports = mongoose.model('Product', productSchema);