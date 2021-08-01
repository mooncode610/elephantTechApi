const express = require('express');
const router = express.Router();
const { SignUp, Login,ChangePassword } = require('../Routes/User');
const {USER_LOGIN, USER_SIGNUP,FORGET_PASSWORD } = require('../Constants/Routes');

exports.LOGIN = router.post(USER_LOGIN,Login);
exports.SIGNUP = router.post(USER_SIGNUP,SignUp);
exports.CHANGE_PASSWORD = router.post(FORGET_PASSWORD,ChangePassword);