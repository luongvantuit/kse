const express = require("express");
const auth = require("../middlewares/verify-token");
const router = express.Router();
const userController = require("../controller/userController");

router.post('/verify-token', auth.verifyIdToken, userController.verify);

router.post('/signup', userController.handleUserSignUp);

router.post('/login', userController.handleUserLogin);

router.get('/me', auth.verifyIdToken, userController.handleUserInfo);

router.get('/role', auth.verifyIdToken, userController.handleUserRole);

module.exports = router;
