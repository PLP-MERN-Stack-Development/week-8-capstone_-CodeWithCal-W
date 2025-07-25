const express = require('express');
const router = express.Router();
const { getAllLessons, getLessonById, createLesson, updateLesson, deleteLesson } = require('../controllers/lessonController');
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

// Upload endpoint for lesson images
router.post('/upload', auth, adminOnly, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

router.get('/', getAllLessons);
router.get('/:id', getLessonById);
router.post('/', auth, adminOnly, createLesson);
router.put('/:id', auth, adminOnly, updateLesson);
router.delete('/:id', auth, adminOnly, deleteLesson);

module.exports = router;