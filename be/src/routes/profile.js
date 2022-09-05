// profile person
const express = require("express");
const auth = require("../middlewares/verify-token");
const profileController = require("../controller/profileController");
const router = express.Router();

router.get('/token',auth.verifyIdToken, profileController.handleGetProfileByToken);

router.get('/header', profileController.handleGetProfile);

router.put('/put', profileController.handlePutProfile);

module.exports = router
