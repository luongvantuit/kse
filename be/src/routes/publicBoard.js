// get thông tin người dùng và trả về bảng công tuỳ vào role
const express = require("express");
const auth = require("../middlewares/verify-token");
const publicBoardController = require("../controller/publicBoardController");


const router = express.Router();

router.get('/getPublicBoard', auth.verifyIdToken, publicBoardController.handleGetPublicBoard);

router.put('/updateTimekeeping', auth.verifyIdToken, publicBoardController.handleUpdateBoard);

module.exports = router;