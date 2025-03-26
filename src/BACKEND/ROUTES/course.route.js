const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({ storage });

const { uploadCourse } = require("../CONTROLLER/course.controller");

router.post("/uploadCourse", upload.array("files"), uploadCourse);


module.exports= router;
