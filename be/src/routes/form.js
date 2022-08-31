const express = require("express");
const auth = require("../middlewares/verify-token");
const formController = require("../controller/formController");
const router = express.Router();

router.get('/form-CompensatingTimekeeping', auth.verifyIdToken, formController.handleGetFormCompensatingTimekeeping);

router.post('/form-CompensatingTimekeeping', auth.verifyIdToken, formController.handlePostFormCompensatingTimekeeping);

router.get('/form-CompensatingTimekeepingAllUnChecked', formController.handleGetAllUnCheckedFormCompensatingTimekeeping);

router.get('/form-CompensatingTimekeepingAllChecked', formController.handleGetAllCheckedFormCompensatingTimekeeping);

router.put('/form-CompensatingTimekeeping', formController.handlePutFormCompensatingTimekeeping);


router.get('/form-OnLeave', auth.verifyIdToken, formController.handleGetFormOnLeave);

router.post('/form-OnLeave',auth.verifyIdToken, formController.handlePostFormOnLeave);

router.get('/form-OnLeaveAllUnChecked', formController.handleGetAllUnCheckedFormOnLeave);

router.get('/form-OnLeaveAllChecked', formController.handleGetAllCheckedFormOnLeave);

router.put('/form-OnLeave', formController.handlePutFormOnLeave);


router.get('/form-OT', auth.verifyIdToken, formController.handleGetFormOT);

router.post('/form-OT', formController.handlePutFormOT);

module.exports = router;
