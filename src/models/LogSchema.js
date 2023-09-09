const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    date: Date,
    value: Number
}, { _id : false });

module.exports = LogSchema;