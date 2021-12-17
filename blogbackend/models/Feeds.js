const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Feeds', FeedsSchema, 'Feeds'); // exporting the model