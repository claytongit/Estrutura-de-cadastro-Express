const express = require('express');

const routes = express.Router();

const authController = require('./controllers/userController');

routes.post('/register', authController.store);

module.exports = routes;