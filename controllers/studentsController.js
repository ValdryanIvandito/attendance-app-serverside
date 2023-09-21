import Students from "../models/studentsModel.js";

const getStudentsByClass = async (req, res) => {
  const class_ = req.params.class_;
  try {
    const students = await Students.find({ class_: class_ });

    if (students.length === 0) {
      return res.status(404).json({ error: "Data not found!" });
    } else {
      const studentsNames = students.map((student) => student.name);
      res.json({ students, studentsNames });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getStudentsByClass };
