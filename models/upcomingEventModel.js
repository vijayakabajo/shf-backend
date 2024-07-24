const mongoose = require('mongoose');

const upcomingEventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventImageUrl: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String
  },
  eventDate: {
    type: String
  },
});

module.exports = mongoose.model('UpcomingEvent', upcomingEventSchema);
