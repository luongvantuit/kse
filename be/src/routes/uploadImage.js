const { response } = require("express");
const express = require("express");
const fs = require("fs");
const { request } = require("http");
const multer = require("multer");
var imageModel = require('../entities/ImageModel');

const router = express.Router();

// SET STORAGE
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('myImage'), async (req, res) => {
    try {
        console.log('post');
        const img = fs.readFileSync(req.file.path);
        const encode_img = img.toString('base64');
        //decode buffer
        // var final_img = {
        //     contentType:req.file.mimetype,
        //     image:new Buffer(encode_img,'base64')
        // };
        const image = new imageModel({
            name: req.file.filename,
            desc: '',
            img: {
                data: encode_img,
                contentType: req.file.mimetype || 'image/jpeg',
            }
        });
        await image.save();
        console.log('successfully');
        return res.status(200).json({
            error: false,
            msg: 'Image saved successfully',
            success: true,
        })
    } catch (error) {
        response.status(500).json({
            error: true,
            msg: 'Error saving image',
            success: false,
        })
    }
})

module.exports = router;
