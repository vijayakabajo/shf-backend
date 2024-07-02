const express = require('express');
const router = express.Router();
const storyController = require('../controllers/homepageStoryController');
const upload = require('../middleware/multerS3Config');

router.get('/', storyController.getHomepageStory);
router.put('/', upload.fields([{ name: 'image1' }, { name: 'image2' }]), storyController.updateHomepageStory);

module.exports = router;