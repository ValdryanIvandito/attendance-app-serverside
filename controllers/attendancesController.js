import Attendances from "../models/attendancesModel.js";

const getAttendancesByClass = async (req, res) => {
  const { class_, date } = req.params;

  try {
    const attendances = await Attendances.find({ class_, date }).sort({
      roll_number: 1,
    });

    if (attendances.length === 0) {
      return res.status(404).json({ error: "Data not found!" });
    } else {
      res.json({ attendances });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAttendances = async (req, res) => {
  const {
    student_id,
    roll_number,
    class_,
    name,
    location,
    activity,
    status_,
    date,
    hour,
    update_date,
  } = req.body;

  try {
    const attendances = await Attendances.find({ class_, date, name });

    if (attendances.length !== 0) {
      return res.status(404).json({ error: "you've been absent!" });
    } else {
      const newAttendances = new Attendances({
        student_id,
        roll_number,
        class_,
        name,
        location,
        activity,
        status_,
        date,
        hour,
        update_date,
      });

      await newAttendances.save();
      res.status(201).json({ message: "Your absent has been save!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAttendances = async (req, res) => {
  const student_id = req.params.student_id;
  const { location, activity, status_ } = req.body;

  try {
    const attendances = await Attendances.findOne({ student_id });

    if (!attendances) {
      return res.status(404).json({ error: "Attendance record not found!" });
    } else {
      attendances.location = location;
      attendances.activity = activity;
      attendances.status_ = status_;

      await attendances.save();

      res
        .status(200)
        .json({ message: "Attendance record updated successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAttendances = async (req, res) => {
  const student_id = req.params.student_id;

  try {
    const attendance = await Attendances.findOne({ student_id });

    if (!attendance) {
      return res.status(404).json({ error: "Attendance record not found!" });
    }

    await attendance.deleteOne({ student_id });

    res.status(200).json({ message: "Attendance record deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  getAttendancesByClass,
  createAttendances,
  updateAttendances,
  deleteAttendances,
};
