const mongoose = require("mongoose");

const elephantSchema = mongoose.Schema({
  elephantId: mongoose.Types.ObjectId,
  userId:mongoose.Types.ObjectId,
  name: { type: String},
  // gender: { type: String, required: true },
  gender: { type: String},
  age: { type: String},
  tusks: { type: String},
  ears: { type: String},
  tail: { type: String},
  gps: {type: String},
  Date: { type: String},
  specialFeatures: { type: String },
  comments: { type: String },
  seenWith:{type:String},
  images: { type: Array },
  addedBy:[]
});

module.exports = mongoose.model("Elephants", elephantSchema);
