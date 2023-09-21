import mongoose from "mongoose";

const activitiesSchema = new mongoose.Schema({
  location: String,
  activity: String,
});

const Activities = mongoose.model("activities", activitiesSchema);

export default Activities;