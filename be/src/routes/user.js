const express = require("express");
const User = require("../entities/User");
// const auth = require("../middlewares/auth");
const auth = require("../middlewares/verify-token")
const router = express.Router();

router.post('/signup', async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token});

    } catch (error) {
        res.status(400).send(error);
    }   
})

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findByCredentials(username, password);
        if(!user){
            throw new Error({error: 'Login failed!'});
        }
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
})

// router.get('/users/me', auth, async(req, res) => {
//     res.send(req.user);
// })

router.get('/me', auth.verifyIdToken, async(req, res) => {
    try {
        const user = await User.findOne({ _id: req._id});
        if(!user){
            throw new Error({
                error: true,
                msg: 'Not found user from token',
                success: false,
        })}
        res.status(200).send({user});
        // đổi mật khẩu khi truy cập /me
        // await User.updateOne(
        //     {_id: req._id},
        //     { $set: { "password" : req.body.newPassword}}
        // )
    } catch (error) {
        res.status(401).send(error);
    }
})


router.get('/role',auth.verifyIdToken, async(req,res) => {
    try {
        const user = await User.findOne({ _id: req._id});
        if(!user){
            throw new Error();
        }
        res.status(200).send({
            error: false,
            role: user.role,
            success: true
        });
    } catch (error) {
        res.status(401).send({
            error: true,
            msg: '',
            success: false
        })
    }
})

module.exports = router;
