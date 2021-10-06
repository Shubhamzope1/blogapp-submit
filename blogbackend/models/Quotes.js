const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const QuotesSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    Quote_id: {
        type: Number,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Quotes', QuotesSchema, 'Quotes'); // exporting the model