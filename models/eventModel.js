const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  eventImageUrl: {
    type: String,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false,
    required: true
  },
  amount: {
    type: Number,
    required: function() { return this.isPaid; }
  },
  slots: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
