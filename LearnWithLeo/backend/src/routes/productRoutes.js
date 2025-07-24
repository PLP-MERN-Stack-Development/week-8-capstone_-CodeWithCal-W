const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { auth, adminOnly } = require('../middleware/auth');

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    // Use Date.now() to avoid name collisions
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin-only routes
router.post('/', auth, adminOnly, createProduct);
router.put('/:id', auth, adminOnly, updateProduct);
router.delete('/:id', auth, adminOnly, deleteProduct);

// Upload a product file (admin only)
router.post('/upload', auth, adminOnly, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  // Return the relative file path to store in the product's downloadUrl
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// Check if user can access a product
router.get('/access/:id', auth, async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (
      user.purchasedProducts.includes(req.params.id) ||
      user.role === 'admin' ||
      user.isSubscribed
    ) {
      return res.json({ access: true });
    }
    res.json({ access: false });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;