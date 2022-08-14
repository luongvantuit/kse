const express = require("express");
const multer = require("multer");
const auth = require("../middlewares/verify-token");
const uploadImageController = require("../controller/uploadImageController");

const router = express.Router();

// SET STORAGE
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

router.post('/', auth.verifyIdToken, upload.single('myImage'), uploadImageController.handlePostUploadImage);

// router.post('/', upload.single('myImage'), uploadImageController.handlePostUploadImage);

router.get('/', uploadImageController.handleGetAllImage);

module.exports = router;
