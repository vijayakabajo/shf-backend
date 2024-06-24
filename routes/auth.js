const express = require('express');
const router = express.Router();
const { login, logout, checkAuth } = require('../controllers/authController');

router.post('/login', login);
router.post('/logout', logout);
router.get('/checkAuth', checkAuth);

module.exports = router;
