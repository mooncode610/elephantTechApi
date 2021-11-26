const express = require('express');
const router = express.Router();

const { CreateElephant, FindElephant,GetAllElephants,GetElephantById,UpdateElephant,DeleteElephant } = require('../Routes/Elephants');
const {ELEPHANT_GET_BY_ID, ELEPHANT_POST,ELEPHANT_GET_ALL,ELEPHANT_UPDATE,ELEPHANT_SPECIFIC, ELEPHANT_DELETE } = require('../Constants/Routes');


exports.UPDATE_ELEPHANT = router.post(ELEPHANT_UPDATE,UpdateElephant);
exports.GET_ALL_ELEPHANTS = router.get(ELEPHANT_GET_ALL,GetAllElephants);
exports.GET_ELEPHANT_BY_ID = router.post(ELEPHANT_GET_BY_ID,GetElephantById);
exports.CREATE_ELEPHANT = router.post(ELEPHANT_POST,CreateElephant);
exports.FIND_SPECFIC_ELEPHANTS = router.post(ELEPHANT_SPECIFIC,FindElephant);
exports.DELETE_ELEPHANT = router.post(ELEPHANT_DELETE, DeleteElephant);
