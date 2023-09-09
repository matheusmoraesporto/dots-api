const mongoose = require('mongoose');
const SignalSchema = require('./SignalSchema');
const DeviceSchema = new mongoose.Schema({
    deviceUUID: {
        type: String,
        unique: true,
        required: true
    },
    signals: [SignalSchema]
});

DeviceSchema.set('_id', false);

module.exports = mongoose.model('Device', DeviceSchema);