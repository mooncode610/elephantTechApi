const express = require('express');
const router = express.Router();
const { SignUp, Login,ChangePassword, GetAllUsers } = require('../Routes/User');
const {USER_LOGIN, USER_SIGNUP,FORGET_PASSWORD, USER_GET_ALL } = require('../Constants/Routes');

exports.LOGIN = router.post(USER_LOGIN,Login);
exports.SIGNUP = router.post(USER_SIGNUP,SignUp);
exports.CHANGE_PASSWORD = router.post(FORGET_PASSWORD,ChangePassword);
exports.GET_ALL_USER =  router.post(USER_GET_ALL,GetAllUsers)