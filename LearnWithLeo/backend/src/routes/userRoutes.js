const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const User = require('../models/User');

// Purchase a product
router.post('/purchase/:productId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (!user.purchasedProducts.includes(req.params.productId)) {
      user.purchasedProducts.push(req.params.productId);
      await user.save();
    }
    res.json({ message: 'Product purchased!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Subscribe user
router.post('/subscribe', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    user.isSubscribed = true;
    await user.save();
    res.json({ message: 'Subscription successful!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
