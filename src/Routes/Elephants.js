const {
    ELEPHANT_EXISTS,
    ELEPHANT_NOT_EXISTS,
    ELEPHANT_SUCCESS_GET,
    ELEPHANT_SUCCESS_POST,
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
const { createElephant,getAllElephants,findElephant,findElephantById,updateElephant } = require('../utils/utilities');





exports.CreateElephant= async (req, res) => {
    try {
        const result = await findElephant(req, res);
        const { data } = result;
        if (!data) {
            const elephant = createElephant(req);
            await elephant.save();
            return res.status(OK).json(generateMessage(ELEPHANT_SUCCESS_POST, OK, SUCCESS_TRUE, elephant));
        }
        return res.status(FAILED).json(generateMessage(ELEPHANT_EXISTS, FAILED, SUCCESS_FALSE, null));
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}


exports.FindElephant = async (req, res) => {
    try {
        const result = await findElephant(req, res);
        console.log("result",result);
        const { data } = result;
        if (data) {
            return res.status(OK).json(generateMessage(ELEPHANT_SUCCESS_GET, SUCCESS, SUCCESS_TRUE, data))
        } else {
            return res.status(FAILED).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}

exports.GetAllElephants = async (req, res) => {
    try {
        const result = await getAllElephants(req, res);
        const { data } = result;
        return res.status(SUCCESS).json(generateMessage(ELEPHANT_SUCCESS_GET, SUCCESS, SUCCESS_TRUE, data));
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}


exports.GetElephantById = async (req, res) => {
    try {
        const result = await findElephantById(req)
        const { data, success } = result;
        console.log("data", result)
        if (success) {
            return res.status(OK).json(generateMessage(ELEPHANT_SUCCESS_GET, SUCCESS, SUCCESS_TRUE, data))
        } else {
            return res.status(FAILED).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    } catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }

}


exports.UpdateElephant = async (req, res) => {
    try {
        const result = await updateElephant(req);
        const { success } = result;
        if (success) {
            return res.status(OK).json(generateMessage(STATUS_UPDATE_SUCCESS, SUCCESS, SUCCESS_TRUE, null))
        } else {
            return res.status(UN_AUTH).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}