const express = require('express');
const FormController = require('../controllers/form.controller.js');
const routeValidation = require('./route-validation.js');

const formRouter = express.Router();

formRouter.get('/', FormController.sendObject);
formRouter.post('/donation', routeValidation, FormController.receiveForm);
formRouter.get('/donation', FormController.listDonations);

module.exports = formRouter;
