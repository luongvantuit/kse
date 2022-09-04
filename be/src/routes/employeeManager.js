// quản lí nhân sự
const express = require("express");
const employeeManagerHandler = require("../controller/employeeManagerController")
const auth = require("../middlewares/verify-token");
const router = express.Router();

router.get('/', employeeManagerHandler.handleGetEmployeeManager);

router.get('/getEmployee',auth.verifyIdToken, employeeManagerHandler.handleGetEmployeeRole);

module.exports = router;
