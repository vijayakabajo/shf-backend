
const express = require('express');
const router = express.Router();
const { getMasonryConfig, updateMasonryConfig } = require('../controllers/masonryConfigController');


router.get('/', getMasonryConfig);
router.put('/', updateMasonryConfig);

module.exports = router;
