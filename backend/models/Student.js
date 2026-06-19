const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  marks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);