const express = require('express');
const router = express.Router();
const {getAboutBody1, updateAboutBody1} = require('../controllers/aboutBody1Controller');
const upload = require('../middleware/multerS3Config');

router.get('/', getAboutBody1);
router.put('/', upload.array('images', 2) ,updateAboutBody1);

module.exports = router;