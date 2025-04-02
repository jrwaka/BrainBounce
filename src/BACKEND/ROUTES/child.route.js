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

const { addChild, getChildren,getChild } = require("../CONTROLLER/child.controller")

//  upload.single("profilePicture");

router.post("/addChild", protect, authorize("addChild"), upload.single("profilePicture"), addChild);
router.get("/getChildren", protect, authorize("getChildren"), getChildren);
router.get("/child/:id", protect, authorize("getChild"),getChild);


module.exports= router

