const express = require('express');
const router = express.Router();
const { SignUp, Login } = require('../Routes/User');
const {USER_LOGIN, USER_SIGNUP } = require('../Constants/Routes');


exports.LOGIN = router.post(USER_LOGIN,Login);
exports.SIGNUP = router.post(USER_SIGNUP,SignUp);