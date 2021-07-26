exports.USER = '/user';
exports.USER_LOGIN = '/login';
exports.USER_SIGNUP = '/signup';


exports.DRIVER = '/driver'
exports.DRIVER_LOGIN = '/login';
exports.DRIVER_SIGNUP = '/signup';
exports.DRIVER_STATUS = '/status';

exports.MAKE_DRIVER_ONLINE = '/online';
exports.GET_DRIVER_ALL_ONLINE = '/getOnlineAllDriver/';
exports.GET_DRIVER_ONLINE = '/getOnlineDriver/';
exports.GET_NEARBY_DRIVER = '/getNearByDriver/';
exports.MAKE_DRIVER_OFFLINE = '/offline'

exports.VEHICLE = '/vehicle';
exports.VEHICLE_POST = '/newVehicle';
exports.VEHICLE_GET = '/getVehicle';
exports.VEHICLE_GET_BY_REG_NO = '/getVehicle/RegNo';
exports.VEHICLE_GET_BY_DRIVER = '/getVehicle/driver';


exports.REQUEST = '/request';
exports.REQUEST_POST = '/newRequest';
exports.REQUEST_GET = '/getRequest';
exports.REQUEST_GET_USER = '/getRequest/user';

exports.TRIP = '/trip';
exports.TRIPS_GET = '/getTrip';
exports.TRIP_GET_BY_USER = '/getTrip/user';
exports.TRIP_GET_BY_DRIVER = '/getTrip/driver';
exports.TRIP_GET_SPECIFIC = '/getTrip/specfic';
exports.TRIP_POST = '/addTrip';
exports.TRIP_COMPLETE = '/completeTrip';
exports.TRIP_ACCEPT = '/acceptTrip';

exports.FILE_UPLOAD = '/fileUpload';
exports.FILE_UPLOAD_UPLOAD = '/upload';

exports.TRANSACTION = '/Transaction';
exports.MAKE_TRANSACTION = '/makeTransaction';
exports.GET_USER_TRANSACTIONS = '/getTransaction'

exports.CARD = '/card';
exports.REGISTER_PAYMENT_CARD = '/registerPaymentCard';
exports.GET_USER_PAYMENT_CARD = '/getPaymentCard';
exports.GET_ALL_PAYMENT_CARD_USERS = '/getAllPaymentUsers';
exports.DELETE_PAYMENT_CARD = '/deletePaymentCard';