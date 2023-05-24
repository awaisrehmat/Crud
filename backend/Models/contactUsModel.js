const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },

    mobileNumber: {
        type: Number,
        required: true,
    },
    messagebody:
    {
        type: String,
        required: true,
    }
});

const contactUs = mongoose.model('contactUs', contactUsSchema)

module.exports = contactUs;
 