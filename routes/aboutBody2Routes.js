const express = require('express');
const router = express.Router();
const {getAboutBody2, updateAboutBody2} = require('../controllers/aboutBody2Controller');
const upload = require('../middleware/multerS3Config');

router.get('/', getAboutBody2);
router.put('/', upload.array('images', 2) ,updateAboutBody2);

module.exports = router;