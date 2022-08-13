// quản lí nhân sự
const express = require("express");
const employeeManagerHandler = require("../controller/employeeManagerController")
const router = express.Router();

router.get('/', employeeManagerHandler.handleGetEmployeeManager);

module.exports = router;
