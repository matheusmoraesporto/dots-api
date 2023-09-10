const Device = require("../models/Device");

responseError = (resp, errMsg, statusCode) => {
    return resp.status(statusCode).send({ error: errMsg });
}

inRange = (log, since, until) => {
    if (since) {
        const sinceDate = new Date(since);
        if (log.date < sinceDate) {
            return false;
        }
    }
    if (until) {
        const untilDate = new Date(until);
        if (log.date > untilDate) {
            return false;
        }
    }
    return true;
}

module.exports = {
    async register(req, resp) {
        const devices = req.body;

        if (!devices || devices.length === 0) {
            return responseError(resp, "invalid request body", 400);
        }

        Device.insertMany(devices)
            .then(() => resp.json({ message: "successful registered" }))
            .catch(error => responseError(resp, error, 400));
    },

    async list(req, resp) {
        const { since, until } = req.body;
        let devices;
        try {
            devices = await Device.find()
        } catch (error) {
            console.log(error);
            return responseError(resp, "internal server error", 400);
        }

        devices.forEach(device =>
            device.signals.forEach(signal =>
                signal.logs = signal.logs.filter(log => inRange(log, since, until))))

        return devices.length > 0
            ? resp.json({ devices: devices })
            : resp.json({ message: "no one device found" });
    }
}