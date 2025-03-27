const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const roles = require("../CONFIG/role.config");
const { protect } = require("../Middlewares/auth.middleware");
const { authorize } = require("../Middlewares/roles.middleware");

const { getUsers, getUser } = require("../CONTROLLER/user.controller");


router.get("/users",protect,authorize("getUsers"), getUsers);
router.get("/users/:id",protect,authorize("getUser"),getUser);

module.exports = router