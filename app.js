const express = require("express");
const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require("./routes/userRoutes");

const app = new express();

app.use(express.static(`${__dirname}/public`));

app.use("/upload", documentRoutes);
app.use("/user", userRoutes);

module.exports = app;
