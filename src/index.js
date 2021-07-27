const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const userController = require('./Controllers/UserController');
const elephantController = require('./Controllers/ElephantController')
// const vehicleController = require('./Controllers/Vehicle');
// const driverController = require('./Controllers/Driver');
// const tripController = require('./Controllers/Trip');
// const requestController = require('./Controllers/Request');
// const onlineDriverController = require('./Controllers/OnlineDriver');
// const fileUploadController = require('./Controllers/Upload');
// const paymentController = require('./Controllers/PaymentCard');
const {
  USER,
  ELEPHANT,
} = require('./Constants/Routes');
const { DATABASE_URL } = require('./Constants/KEYS');



mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(err => console.log(err))
mongoose.Promise = global.Promise;


app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//HEADERS MIDDLE WARE
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
  }
  next();
});



// ROUTES
app.use(USER, userController.LOGIN);
app.use(USER, userController.SIGNUP);
//VEHICLES
app.use(ELEPHANT, elephantController.GET_ALL_ELEPHANTS);
app.use(ELEPHANT, elephantController.GET_ELEPHANT_BY_ID);
app.use(ELEPHANT, elephantController.FIND_SPECFIC_ELEPHANTS);
app.use(ELEPHANT, elephantController.CREATE_ELEPHANT);
app.use(ELEPHANT, elephantController.UPDATE_ELEPHANT);


// //FILE
// app.use(FILE_UPLOAD, fileUploadController.FILE_UPLOAD);

app.use((req, res, next) => {
  const error = new Error("HELLO TO SERVER");
  error.status = 404
  next(error);
})


//catches error from anywhere
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });

});



module.exports = app;