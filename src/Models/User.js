const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    profileImg: { type: String, required: true },
    nicNumber: { type: String, required: true }
});


module.exports = mongoose.model("Users", UserSchema)