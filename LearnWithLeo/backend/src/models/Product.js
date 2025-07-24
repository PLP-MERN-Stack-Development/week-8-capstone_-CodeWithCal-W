const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  age: String,
  type: String,
  image: String,
  price: { type: Number, default: 0 },
  downloadUrl: { type: String }, // Path or URL to the downloadable file
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);