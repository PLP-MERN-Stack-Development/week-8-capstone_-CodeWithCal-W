const express = require('express');
const router = express.Router();
const { getAllStories, getStoryById, createStory, updateStory, deleteStory } = require('../controllers/storyController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', getAllStories);
router.get('/:id', getStoryById);
router.post('/', auth, adminOnly, createStory);
router.put('/:id', auth, adminOnly, updateStory);
router.delete('/:id', auth, adminOnly, deleteStory);

module.exports = router;