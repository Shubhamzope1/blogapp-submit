const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('profs', profsSchema, 'profs'); // exporting the model