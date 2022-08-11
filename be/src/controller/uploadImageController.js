const imageModel = require('../entities/ImageModel');
const fs = require("fs");

async function handlePostUploadImage(req, res) {
    try {
        console.log('post');
        const img = fs.readFileSync(req.file.path);
        const encode_img = img.toString('base64');
        //decode buffer
        // var final_img = {
        //     contentType:req.file.mimetype,
        //     image:new Buffer(encode_img,'base64')
        // };
        const imageDB = await imageModel.findOne({ username: req.username });
        if (imageDB) {
            await imageModel.findOneAndUpdate(
                {
                    username: req.username,
                },
                {
                    $set: {
                        name: req.file.filename,
                        desc: '',
                        img: {
                            data: encode_img,
                            contentType: req.file.mimetype || 'image/jpeg',
                        }
                    }
                }
            )
        }
        const image = new imageModel({
            username: req.username,
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
}

async function handleGetAllImage(req, res) {
    try {
        const images = await imageModel.find();
        if (!images) {
            return res.status(404).json({
                error: true,
                msg: 'Image not found',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            images: images,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            error: error,
            msg: 'Image failed',
            success: false,
        })
    }
}

module.exports = {
    handlePostUploadImage,
    handleGetAllImage
}
