const {
    ELEPHANT_EXISTS,
    ELEPHANT_NOT_EXISTS,
    ELEPHANT_SUCCESS_GET,
    ELEPHANT_SUCCESS_POST,
    SUCCESS_FALSE,
    SUCCESS_TRUE,
    STATUS_UPDATE_FAILED,
    ELEPHANT_SUCCESS_UPDATE,
    ELEPHANT_UPDATE_GET,
    STATUS_DELETE_SUCCESS,
} = require('../Constants/Message');
const {
    FAILED,
    OK,
    UN_AUTH,
    SUCCESS
} = require('../Constants/StatusCode');
const { generateMessage, } = require('../utils/generateMessage');
const { createElephant,getAllElephants,findElephant,findElephantById,findElephant_byData,updateElephant,deleteElephant } = require('../utils/utilities');





exports.CreateElephant= async (req, res) => {
    try {
        const result = await findElephant_byData(req, res);
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
        //console.log("result",result);
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
    //console.log('req')
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
        //console.log("data", result)
        if (success) {
            return res.status(OK).json(generateMessage(ELEPHANT_SUCCESS_UPDATE, SUCCESS, SUCCESS_TRUE, data))
        } else {
            return res.status(FAILED).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    } catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }

}


exports.UpdateElephant = async (req, res) => {
//console.log("updateElephatn",req);
    try {
        const result = await updateElephant(req);
        const { success } = result;
        if (success) {
            return res.status(OK).json(generateMessage(ELEPHANT_UPDATE_GET, SUCCESS, SUCCESS_TRUE, null))
        } else {
            return res.status(UN_AUTH).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}

exports.DeleteElephant = async (req, res) => {
    try {
        const result = await deleteElephant(req);
        const { success } = result;
        if (success) {
            return res.status(OK).json(generateMessage(STATUS_DELETE_SUCCESS, SUCCESS, SUCCESS_TRUE, null))
        } else {
            return res.status(UN_AUTH).json(generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null))
        }
    }
    catch (error) {
        return res.status(FAILED).json(generateMessage(error.message, FAILED, SUCCESS_FALSE, null))
    }
}
