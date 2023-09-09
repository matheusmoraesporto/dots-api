const mongoose = require('mongoose');
const LogSchema = require('./LogSchema')

const SignalSchema = new mongoose.Schema({
    UUID: String,
    recovered: Boolean,
    logs: [LogSchema]
}, { _id : false });

module.exports = SignalSchema;