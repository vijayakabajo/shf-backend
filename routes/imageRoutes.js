const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const { uploadImages, getImages, deleteImage } = require('../controllers/imageController');

router.post('/upload', upload.array('images', 10), uploadImages);
router.get('/', getImages);
router.delete('/:id', deleteImage);

module.exports = router;
