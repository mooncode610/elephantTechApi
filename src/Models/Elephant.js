const mongoose = require("mongoose");

const elephantSchema = mongoose.Schema({
  elephantId: mongoose.Types.ObjectId,
  userId:mongoose.Types.ObjectId,
  name: { type: String},
  gender: { type: String, required: true },
  age: { type: String, required: true },
  tusks: { type: String, required: true },
  ears: { type: String},
  tail: { type: String, required: true },
  gps: {type: String, required: true},
  Date: { type: String},
  specialFeatures: { type: String },
  comments: { type: String },
  seenWith:{type:String},
  images: { type: Array },
  addedBy:[]
});

module.exports = mongoose.model("Elephants", elephantSchema);
