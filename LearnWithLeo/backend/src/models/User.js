const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // 'user' or 'admin'
  purchasedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  isSubscribed: { type: Boolean, default: false } // <-- Add this line
});

module.exports = mongoose.model('User', userSchema);
