const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QofDaySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('QofDay', QofDaySchema, 'QofDay'); // exporting the model