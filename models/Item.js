const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create our Schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cost: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('item', itemSchema);