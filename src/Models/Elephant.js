const mongoose = require("mongoose");

const elephantSchema = mongoose.Schema({
  elephantId: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  tusks: { type: String, required: true },
  ears: { type: String, required: true },
  tail: { type: String, required: true },
  Date: { type: String, required: true },
  specialFeatures: { type: String },
  comments: { type: String },
  seenWith:{type:String},
  images: { type: Array },
});

module.exports = mongoose.model("Elephants", elephantSchema);
