const express = require('express');
const routes = express.Router();
const DeviceController = require('./controllers/DeviceController');
const { celebrate, Segments, Joi } = require('celebrate');

routes.post('/device', DeviceController.register);

routes.get('/device', celebrate({
    [Segments.QUERY]: {
        since: Joi.string(),
        until: Joi.string()
    }
}), DeviceController.list);

module.exports = routes;