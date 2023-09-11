const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const express = require('express');
const app = express();

const cors = require('cors'); 
app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use(routes);

module.exports = app;