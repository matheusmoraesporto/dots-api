const Device = require("../models/Device");

responseError = (resp, errMsg, statusCode) => {
    return resp.status(statusCode).send({ error: errMsg });
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

    async list(_, resp) {
        const devices = await Device.find();

        return devices.length > 0
            ? resp.json(devices)
            : resp.json({message: "no one device found"});
    },

    async getById(req, resp) {
        const { id } = req.params;

        try {
            const device = await Device.findOne({ ['deviceUUID']: id }).exec();
            if (device) {
                return resp.json(device);
            }
            return responseError(resp, `no one device found with UUID ${id}`, 404);
        } catch (error) {
            console.log(`error trying to find a device with UUID ${id}: ${error}`)
            return responseError(resp, "internal server error", 400);
        }
    }
}