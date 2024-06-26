const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', upload.single('eventImage'), createEvent);
router.put('/:id', upload.single('eventImage'), updateEvent);
router.delete('/:id', deleteEvent);

module.exports= router;
