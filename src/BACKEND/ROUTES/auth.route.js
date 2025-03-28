const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();


const {
  signUp,
  signIn,
  forgotPassword,
  verifyOTP
} = require("../CONTROLLER/auth.controller");


router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.post("/forgotPassword", forgotPassword);
router.post("/forgotPassword/verifyOTP", verifyOTP);

module.exports = router;
