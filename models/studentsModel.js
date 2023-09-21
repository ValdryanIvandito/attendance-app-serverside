import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  class_: String,
  roll_number: Number,
  name: String,
});

const Students = mongoose.model("student", studentsSchema);

export default Students;
