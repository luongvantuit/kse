const imageModel = require('../entities/ImageModel');
const fs = require("fs");

async function handlePostUploadImage(req, res) {
    try {
        console.log('post');
        const img = fs.readFileSync(req.file.path);
        const encode_img = img.toString('base64');
        // console.log('path: ', req.file.path);
        // let arr = [];
        // for(let i =0; i<encode_img.length; i+=20) {
        //     arr.push(encode_img.slice(i, i + 20))
        // }
        // console.log(arr);
        //decode buffer
        // var final_img = {
        //     contentType:req.file.mimetype,
        //     image:new Buffer(encode_img,'base64')
        // };
        fs.unlinkSync(req.file.path);
        console.log('remove image successfully')
        const imageDB = await imageModel.findOne({ username: req.username });
        if (!imageDB) {
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
        } else {
            console.log('update');
            await imageModel.findOneAndUpdate(
                {
                    username: req.username,
                },
                {
                    $set: {
                        isUpdated: true,
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
        console.log('successfully');
        return res.status(200).json({
            error: false,
            msg: "successfully",
            success: true,
        })

    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error saving image',
            success: false,
        })
    }
}

async function handleGetOneImage(req, res) {
    try {
        const username = req.username;
        const image = await imageModel.findOne({username: username, isUpdated: true});
        if(!image) return res.status(404).json({
            error: true,
            msg: 'Image not found',
            success: false,
        });
        return res.status(200).json({
            error: false,
            image: image,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error handleGetOneImage',
            success: false,
        });
    }
}

async function handleGetAllImage(req, res) {
    try {
        const images = await imageModel.find({ isUpdated: true});
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
    handleGetOneImage,
    handleGetAllImage
}
