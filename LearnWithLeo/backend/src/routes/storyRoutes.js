const express = require('express');
const router = express.Router();
const { getAllStories, getStoryById, createStory, updateStory, deleteStory } = require('../controllers/storyController');
const { auth, adminOnly } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Set up multer for uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
  }
});
const upload = multer({ storage });

// Upload endpoint for story images
router.post('/upload', auth, adminOnly, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

router.get('/', getAllStories);
router.get('/:id', getStoryById);
router.post('/', auth, adminOnly, createStory);
router.put('/:id', auth, adminOnly, updateStory);
router.delete('/:id', auth, adminOnly, deleteStory);

module.exports = router;