import express from "express";

import studentsController from "../controllers/studentsController.js";
import activitiesController from "../controllers/activitiesController.js";
import attendancesController from "../controllers/attendancesController.js";
import loginController from "../controllers/loginController.js";

import { authorizationCheck } from "../utilities/authorizationCheck.js";

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.post("/login", loginController.login);

router.get("/students/:class_", studentsController.getStudentsByClass);

router.get(
  "/activities/:location",
  activitiesController.getActivitiesBylocation
);

router.get(
  "/attendances/:class_/:date",
  authorizationCheck,
  attendancesController.getAttendancesByClass
);

router.post("/attendances", attendancesController.createAttendances);

router.put(
  "/attendances/:student_id",
  authorizationCheck,
  attendancesController.updateAttendances
);

router.delete(
  "/attendances/:student_id",
  authorizationCheck,
  attendancesController.deleteAttendances
);

export default router;
