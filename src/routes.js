const express = require('express');
const routes = express.Router();
const DeviceController = require('./controllers/DeviceController');
const { celebrate, Segments, Joi } = require('celebrate');

routes.post('/device', DeviceController.register);

routes.get('/device', DeviceController.list);

routes.get('/device/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    })
}), DeviceController.getById);

module.exports = routes;