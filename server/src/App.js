const express = require('express');
const app = express();


const api = require('../api');
app.use('/api', apiRoutes);


module.exports = app;
