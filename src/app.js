const express = require('express');
const cors = require('cors');
const formRouter = require('./routes/form.router.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use(formRouter);

module.exports = app;
