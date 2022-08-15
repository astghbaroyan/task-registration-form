'use strict';

const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/controller.js');

userRouter.post('/users/login', UserController.loginUser);
userRouter.post('/users', UserController.registration);
userRouter.get('/users', UserController.getUserPage);

module.exports = userRouter;