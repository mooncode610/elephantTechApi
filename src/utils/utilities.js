const User = require("../Models/User");
const Elephant = require("../Models/Elephant");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { generateMessage } = require("./generateMessage");
const {
  USER_EXISTS,
  USER_NOT_EXISTS,
  SUCCESS_FALSE,
  SUCCESS_TRUE,
  ELEPHANT_EXISTS,
  ELEPHANT_NOT_EXISTS,
  ELEPHANT_SUCCESS_GET,
} = require("../Constants/Message");
const {
  OK,
  UN_AUTH,
  FAILED,
  NOT_FOUND,
  SUCCESS,
} = require("../Constants/StatusCode");

const saltRounds = 10;

const hashPassword = async (password) => {
  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    hashPasword = hash;
  });
  const hashedPasword = await bcrypt.hash(password, saltRounds);
  console.log("HASH", hashedPasword);
  return hashedPasword;
};
exports.comparePassword = async (password, hashPassword) => {
  console.log("passwords", password, hashPassword);
  const result = await bcrypt.compare(password, hashPassword);
  return result;
};

exports.createUser = async (req) => {
  const user = new User({
    userId: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: await hashPassword(req.body.password),
  });
  console.log("returning user", user);
  return user;
};
exports.changePassword = async (req) => {
  const user = User.findOneAndUpdate({ email: req.body.email },
    {$set:{password:await hashPassword(req.body.password)}}
  );
  console.log("returning user", user);
  return user;
};

exports.createElephant = (req) => {
  const elephant = new Elephant({
    elephantId: mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    tusks: req.body.tusks,
    ears: req.body.ears,
    tail: req.body.tail,
    Date: new Date(),
    specialFeatures: req.body.specialFeatures,
    comments: req.body.comments,
    images: req.body.images,
    seenWith: req.body.seenWith,
  });
  return elephant;
};

exports.findElephant = async (req) => {
  const data = await Elephant.find(req.body)
    .exec()
    .then((elephant) => {
      if (elephant.length !== 0) {
        return generateMessage(
          ELEPHANT_EXISTS,
          SUCCESS,
          SUCCESS_TRUE,
          elephant
        );
      }
      return generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null);
    });
  return data;
};
exports.findElephantById = async (req) => {
  const data = await Elephant.find({ elephantId: req.body.elephantId })
    .exec()
    .then((elephant) => {
      if (elephant.length !== 0) {
        return generateMessage(
          ELEPHANT_SUCCESS_GET,
          SUCCESS,
          SUCCESS_TRUE,
          elephant
        );
      }
      return generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null);
    });
  return data;
};

exports.updateElephant = async (req) => {
  const data = await Elephant.updateOne(
    { elephantId: req.body.elephantId },
    {
      $set: req.body,
    }
  )
    .exec()
    .then((elephant) => {
      console.log("updated", elephant);
      if (elephant.ok !== 0) {
        return generateMessage(STATUS_UPDATE_SUCCESS, OK, SUCCESS_TRUE, null);
      }
      return generateMessage(STATUS_UPDATE_FAILED, FAILED, SUCCESS_FALSE, null);
    });
  return data;
};
exports.getAllElephants = async (req) => {
  const data = await Elephant.find()
    .exec()
    .then((elephants) => {
      if (elephants.length !== 0) {
        return generateMessage(
          ELEPHANT_SUCCESS_GET,
          OK,
          SUCCESS_TRUE,
          elephants
        );
      }
      return generateMessage(ELEPHANT_NOT_EXISTS, FAILED, SUCCESS_FALSE, null);
    });
  return data;
};

exports.findUser = async (req, res) => {
  const data = await User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length !== 0) {
        return generateMessage(USER_EXISTS, UN_AUTH, SUCCESS_TRUE, user);
      }
      return generateMessage(USER_NOT_EXISTS, OK, SUCCESS_FALSE, null);
    });
  return data;
};

exports.getAllUsers = async (req) => {
  const data = await User.find()
    .exec()
    .then((users) => {
      if (users.length !== 0) {
        return generateMessage(USER_EXISTS, FAILED, SUCCESS_TRUE, users);
      }
      return generateMessage(USER_NOT_EXISTS, OK, SUCCESS_FALSE, null);
    });
  return data;
};
