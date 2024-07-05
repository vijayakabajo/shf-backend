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

module.exports = mongoose.model('AboutBody1', aboutBody2Schema);