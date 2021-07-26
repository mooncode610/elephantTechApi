const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// const userController = require('./Controllers/User');
// const vehicleController = require('./Controllers/Vehicle');
// const driverController = require('./Controllers/Driver');
// const tripController = require('./Controllers/Trip');
// const requestController = require('./Controllers/Request');
// const onlineDriverController = require('./Controllers/OnlineDriver');
// const fileUploadController = require('./Controllers/Upload');
// const paymentController = require('./Controllers/PaymentCard');
// const {
//   USER,
//   VEHICLE,
//   DRIVER,
//   TRIP,
//   REQUEST,
//   FILE_UPLOAD,
//   CARD,
//   TRANSACTION
// } = require('./Constants/Routes');
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
// app.use(USER, userController.LOGIN);
// app.use(USER, userController.SIGNUP);
// //VEHICLES
// app.use(VEHICLE, vehicleController.GET_ALL_VEHICLES);
// app.use(VEHICLE, vehicleController.GET_BY_DRIVER);
// app.use(VEHICLE, vehicleController.GET_BY_REG_NO);
// app.use(VEHICLE, vehicleController.CREATE_VEHICLE);
// //DRIVERS
// app.use(DRIVER, driverController.LOGIN);
// app.use(DRIVER, driverController.SIGNUP);
// app.use(DRIVER, driverController.UPDATE_STATUS);
// //ONLINE DRIVER
// app.use(DRIVER, onlineDriverController.GET_DRIVER_ALL_ONLINE);
// app.use(DRIVER, onlineDriverController.GET_DRIVER_ONLINE);
// app.use(DRIVER, onlineDriverController.GET_NEARBY_DRIVER);
// app.use(DRIVER, onlineDriverController.MAKE_DRIVER_ONLINE);
// app.use(DRIVER, onlineDriverController.MAKE_DRIVER_OFFLINE);
// //TRIPS
// app.use(TRIP, tripController.TRIPS_GET_ALL);
// app.use(TRIP, tripController.TRIPS_GET_USER);
// app.use(TRIP, tripController.TRIPS_GET_DRIVER);
// app.use(TRIP, tripController.TRIP_ADD);
// app.use(TRIP,tripController.COMPLETE_TRIP);
// app.use(TRIP,tripController.ACCEPT_TRIP);
// app.use(TRIP,tripController.GET_SPECIFIC);
// //REQUESTS
// app.use(REQUEST, requestController.REQUEST_GET);
// app.use(REQUEST, requestController.REQUEST_ADD);
// app.use(REQUEST, requestController.REQUEST_GET_USER);
// //PAYMENT CARDS
// app.use(CARD, paymentController.GET_USER_CARD);
// app.use(CARD, paymentController.GET_ALL_PAYMENT_CARD_USERS);
// app.use(CARD, paymentController.ADD_CARD);
// app.use(CARD, paymentController.DELETE_PAYMENT_CARD);
// //TRANSACTION
// app.use(TRANSACTION, paymentController.MAKE_TRANSACTION);
// app.use(TRANSACTION,paymentController.GET_ALL_PAYMENT_CARD_USERS)
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