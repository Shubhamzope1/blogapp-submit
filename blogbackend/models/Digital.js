const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const DigitalSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    digital_id: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Digital', DigitalSchema, 'Digital'); // exporting the model