const express = require("express");
const User = require("../entities/User");
const auth = require("../middlewares/verify-token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecretKey }   = require("../config/server");
const CreateUserDB = require("./create-user-db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const usernameDB = await User.findOne({ username: req.body.username });
        if (usernameDB) {
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
        return res.status(201).json({
            user: user,
            msg: 'Successfully created a new user',
            success: true,
        });
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: 'Error creating a new user',
            success: false,
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(400).json({
                error: true,
                msg: 'Username not found',
                success: false
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                error: true,
                msg: 'Password mismatch',
                success: false
            });
        }

        const token = jwt.sign({ username: user.username }, jwtSecretKey);
        if (!token) {
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
        return res.status(400).json({
            error: true,
            msg: 'Login failed! Please try again later',
            success: false
        });
    }
})


router.get('/me', auth.verifyIdToken, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.username });
        if (!user) {
            return res.status(404).json({
                error: true,
                msg: 'Not found user from token',
                success: false,
            })
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: error.message,
            success: false,
        });
    }
})


router.get('/role', auth.verifyIdToken, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.username });
        if (!user) {
            return res.status(404).json({
                error: true,
                msg: 'Not found user from token',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            role: user.role,
            success: true
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            msg: '',
            success: false
        })
    }
})

module.exports = router;
