const express = require('express');
const router = express.Router();
const { getAllLessons, getLessonById, createLesson, updateLesson, deleteLesson } = require('../controllers/lessonController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', getAllLessons);
router.get('/:id', getLessonById);
router.post('/', auth, adminOnly, createLesson);
router.put('/:id', auth, adminOnly, updateLesson);
router.delete('/:id', auth, adminOnly, deleteLesson);

module.exports = router;