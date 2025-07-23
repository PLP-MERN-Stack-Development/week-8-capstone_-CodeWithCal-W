const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { auth, adminOnly } = require('../middleware/auth');

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin-only routes
router.post('/', auth, adminOnly, createProduct);
router.put('/:id', auth, adminOnly, updateProduct);
router.delete('/:id', auth, adminOnly, deleteProduct);

// Check if user can access a product
router.get('/access/:id', auth, async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (
      user.purchasedProducts.includes(req.params.id) ||
      user.role === 'admin' ||
      user.isSubscribed // <-- Add this field to your user model if you want
    ) {
      return res.json({ access: true });
    }
    res.json({ access: false });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;