const mongoose = require('mongoose');

const aboutBody2Schema = mongoose.Schema({
    images: [{
        type: String,
        required: true,
    }],

    title:{
        type: String,
        required: true,
    },

    sub_text: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('AboutBody2', aboutBody2Schema);