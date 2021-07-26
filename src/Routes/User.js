const {
    USER_EXISTS,
    USER_NOT_EXISTS,
    USER_SUCCESS_LOGIN,
    USER_SUCCESS_SIGNUP,
    SUCCESS_FALSE,
    SUCCESS_TRUE,
} = require('../Constants/Message');
const {
    FAILED,
    OK,
    UN_AUTH,
    SUCCESS
} = require('../Constants/StatusCode');
const { generateMessage, } = require('../utils/generateMessage');
const { createUser, findUser } = require('../utils/utilities');





exports.SignUp = async (req, res) => {
    try {
        const result = await findUser(req, res);
        const { data } = result;
        if (!data) {
            const user = createUser(req);
            await user.save();
            return res.status(OK).json(generateMessage(USER_SUCCESS_SIGNUP, OK, SUCCESS_TRUE, null));
        }
        return res.status(FAILED).json(generateMessage(USER_EXISTS, FAILED, SUCCESS_FALSE, null));
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}


exports.Login = async (req, res) => {
    console.log(req.body)
    try {
        const result = await findUser(req, res);
        const { data } = result;
        if (data) {
            return res.status(OK).json(generateMessage(USER_SUCCESS_LOGIN, SUCCESS, SUCCESS_TRUE, data))
        } else {
            return res.status(UN_AUTH).json(generateMessage(USER_NOT_EXISTS, UN_AUTH, SUCCESS_FALSE, null))
        }
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}