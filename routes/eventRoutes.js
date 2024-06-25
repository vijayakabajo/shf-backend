const express = require('express');
const router = require.Router();
const upload = require('../middleware/multerS3Config');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

router.get('/',getEvents);
router.get('/:id',getEventById);
router.post('/',createEvent);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);

module.exports= router;
