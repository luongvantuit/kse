const express = require("express");
const User = require("../entities/User");
const auth = require("../middlewares/verify-token");
const CreateUserDB = require("./create-user-db");
const router = express.Router();

router.post('/signup', async(req, res) => {
    try {
        const usernameDB = await User.findOne({ username: req.body.username });
        if(usernameDB){
            return res.status(500).json({
                error: "Username already exists",
                success: false,
            })
        }
        const user = new User({
            username: req.body.username,
            fullname: req.body.fullname,
            role: req.body.role,
            password: req.body.password,
        });
        await user.save();
        CreateUserDB.create(req.body.username, req.body.contractInfo || {}, req.body.personInfo || {}, req.body.role || 'staff');
        return res.status(201).send({ 
            user: user,
            msg: 'Successfully created a new user',
            success: true,
        });
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const usernameDB = await User.find();
        console.log('username db ', usernameDB);
        const {username, password} = req.body;
        const user = await User.findByCredentials(username, password);
        if(!user){
            return res.status(400).send({
                error: true,
                msg: 'Not found user',
                success: false
            });
        }
        const token = await user.generateAuthToken();
        if(!token){
            return res.status(400).json({
                error: true,
                msg: 'Invalid credentials',
                sucess: false,
            })
        }
        return res.status(201).json({
            error: false,    
            token: token,
            success: true,
        });
    } catch (error) {
        return res.status(400).send({
            error: true,
            msg: 'Login failed! Please try again later',
            success: false
        });
    }
})


router.get('/me', auth.verifyIdToken, async(req, res) => {
    try {
        const user = await User.findOne({ _id: req._id});
        if(!user){
            return res.status(404).json({
                error: true,
                msg: 'Not found user from token',
                success: false,
            })
        }
        return res.status(200).send({user});
        // đổi mật khẩu khi truy cập /me
        // await User.updateOne(
        //     {_id: req._id},
        //     { $set: { "password" : req.body.newPassword}}
        // )
    } catch (error) {
        return res.status(401).send(error);
    }
})


router.get('/role',auth.verifyIdToken, async(req,res) => {
    try {
        const user = await User.findOne({ _id: req._id});
        if(!user){
            return res.status(404).json({
                error: true,
                msg: 'Not found user from token',
                success: false,
            })
        }
        return res.status(200).send({
            error: false,
            role: user.role,
            success: true
        });
    } catch (error) {
        return res.status(401).send({
            error: true,
            msg: '',
            success: false
        })
    }
})

module.exports = router;
