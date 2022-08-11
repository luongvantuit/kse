// profile person
const express = require("express");
const auth = require("../middlewares/verify-token");
const profileController = require("../controller/profileController");
const router = express.Router();

router.get('/', auth.verifyIdToken, profileController.handleGetProfile);

router.put('/', profileController.handlePutProfile);

module.exports = router
