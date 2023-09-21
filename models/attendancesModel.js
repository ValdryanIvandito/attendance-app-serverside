import mongoose from "mongoose";

const attendancesSchema = new mongoose.Schema({
  student_id: String,
  roll_number: Number,
  class_: String,
  name: String,
  location: String,
  activity: String,
  status_: String,
  date: String,
  hour: String,
  update_date: String,
});

const Attendances = mongoose.model("attendances", attendancesSchema);

export default Attendances;
