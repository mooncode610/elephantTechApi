const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


module.exports = mongoose.model("Users", UserSchema)