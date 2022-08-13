const express = require("express");
const auth = require("../middlewares/verify-token");
const formController = require("../controller/formController");
const router = express.Router();

router.get('/form-CompensatingTimekeeping', auth.verifyIdToken, formController.handleGetFormCompensatingTimekeeping);

router.put('/form-CompensatingTimekeeping', formController.handlePutFormCompensatingTimekeeping);

router.get('/form-OnLeave', auth.verifyIdToken, formController.handleGetFormOnLeave);

router.put('/form-OnLeave', formController.handlePutFormOnLeave);

router.get('/form-OT', auth, formController.handleGetFormOT);

router.put('/form-OT', formController.handlePutFormOT);

module.exports = router;
