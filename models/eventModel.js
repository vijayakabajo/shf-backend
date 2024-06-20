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
  image: {
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
    required: function() { return this.isPaid;  }  //returns true if the isPaid is true otherwise false
  },
  slots: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true 
  },
  duration: {
    type: Number,  
    required: true 
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
