const express = require('express');
const formRouter = require('./routes/form.router.js');

const app = express();

app.use(express.json());
app.use(formRouter);

module.exports = app;
