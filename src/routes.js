const express = require('express');
const routes = express.Router();
const DeviceController = require('./controllers/DeviceController');
const { celebrate, Segments, Joi } = require('celebrate');

routes.post('/device', DeviceController.register);

routes.get('/device', celebrate({
    [Segments.BODY]: {
        since: Joi.string().isoDate(),
        until: Joi.string().isoDate()
    }
}), DeviceController.list);

module.exports = routes;