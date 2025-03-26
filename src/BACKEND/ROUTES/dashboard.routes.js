const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const roles = require("../CONFIG/role.config")
const { getAdminDashboard, getTeacherDashboard, getParentDashboard } = require("../CONTROLLER/dashboard.controller");

const { protect } = require("../Middlewares/auth.middleware")
const { authorize } = require("../Middlewares/roles.middleware")


router.get("/dashboard/admin", protect,authorize("admin_dashboard") ,getAdminDashboard);
router.get("/dashboard/teacher", protect, authorize("teacher_dashboard"), getTeacherDashboard);
router.get("/dashboard/parent", protect,authorize("parent_dashboard") ,getParentDashboard);




module.exports = router;