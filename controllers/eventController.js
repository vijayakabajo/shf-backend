const Event = require('../models/eventModel');
const { deleteObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../config/awsConfig')

//Event Creation
exports.createEvent = async (req, res)=>{
    const {
        eventTitle,
        eventDescription,
        isPaid,
        amount,
        slots,
        eventLocation,
        eventDate,
        startTime,
        endTime
    } = req.body;

    const eventImageUrl= req.file ? req.file.location : '' //if exists

    try{
        const newEvent = new Event({
            eventTitle,
            eventDescription,
            eventImageUrl,
            isPaid,
            amount,
            slots,
            eventLocation,
            eventDate,
            startTime,
            endTime
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    }
    catch (error) {
        console.error('Error during event creation:', error);
        res.status(500).json({ error: 'Server error during event creation' });
      }
}

//Get Events
exports.getEvent = async (req, res)=>{
    try{
        const events = await Event.find();
        res.status(200).json(events);
    }catch(error){
        res.status(500).json({error: 'server error during fetching events'});
    }
}