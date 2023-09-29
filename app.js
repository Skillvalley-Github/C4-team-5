const express = require('express');
const contractRoutes = require('./routes/clientRoutes');

const app = new express();

app.use(express.static(`${__dirname}/public`));

app.use('/uploads',contractRoutes);

module.exports = app;