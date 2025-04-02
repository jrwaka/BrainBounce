const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({ storage });
const roles = require("../CONFIG/role.config");
const { protect } = require("../Middlewares/auth.middleware");
const { authorize } = require("../Middlewares/roles.middleware");

const { uploadCourse,downloadCourse,getCourses,getCourse,updateCourse,deleteCourse,getCoursesByGrade, getCoursesByTeacher } = require("../CONTROLLER/course.controller");

router.post("/uploadCourse",protect,authorize("uploadCourse"), upload.single("courseFiles"), uploadCourse);
router.post("/downloadCourse", protect, authorize("downloadCourse"), downloadCourse);
router.get("/getCourses", protect, authorize("getCourses"), getCourses);
router.get("/getCoursesByGrade", protect, authorize("getCoursesByGrade"), getCoursesByGrade);
router.get("/getCoursesByTeacher", protect, authorize("getCoursesByTeacher"), getCoursesByTeacher);
router.get("/course/:id", protect, authorize("getCourse"), getCourse);
router.put("/course/:id", protect, authorize("updateCourse"), updateCourse);
router.delete("/course/:id", protect, authorize("deleteCourse"), deleteCourse);

module.exports= router;
