const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { authenticate } = require("../Middlewares/auth.middleware");
const {
  signUp,
  signIn,
} = require("../CONTROLLER/auth.controller");
// const { getUsers, getUser } = require("../CONTROLLER/auth.controller");

router.post("/signUp", signUp);
router.post("/signIn", signIn);
// router.get("/users", getUsers);
// router.get("/users/:id", getUser);
// router.post("/forgotPassword", forgotPassword);
// router.post("/forgotPassword/verifyOTP", verifyOTP);

module.exports = router;
