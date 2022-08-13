const User = require("../entities/User");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../config/server");
const CreateUserDB = require("../controller/create-user-db");

async function hashedPassword(password) {
    try {
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

async function handleUserSignUp(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const fullname = req.body.fullname;
        const role = req.body.role;
        console.log(req.body);
        const usernameDB = await User.findOne({ username: username }).exec();
        console.log('username', usernameDB);
        if (usernameDB) {
            return res.status(500).json({
                error: "Username already exists",
                success: false,
            })
        }
        const user = new User({
            username: username,
            fullname: fullname,
            role: role,
            password: await hashedPassword(password),
        });
        await user.save();
        console.log('User saved successfully');
        CreateUserDB.create(req.body.username, req.body.contractInfo || {}, req.body.personInfo || {}, req.body.role || 'staff');
        // CreateUserDB.create(user._id,req.body.username, req.body.contractInfo || {}, req.body.personInfo || {}, req.body.role || 'staff');
        console.log('CreateUserDB successfully');
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
};

async function handleUserLogin(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body);
        const user = await User.findOne({ username: username });
        console.log(user);
        if (!user) {
            return res.status(400).json({
                error: true,
                msg: 'Username not found',
                success: false
            });
        } else {
            console.log('Usename is found');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                error: true,
                msg: 'Password mismatch',
                success: false
            });
        } else {
            console.log('Password is match');
        }
        const token = jwt.sign({ _id: user._id }, jwtSecretKey);
        if (!token) {
            return res.status(400).json({
                error: true,
                msg: 'Invalid credentials',
                sucess: false,
            })
        } else {
            console.log('Token generated');
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
}

async function handleUserInfo(req, res) {
    try {
        const user = await User.findOne({ username: req.username }).exec();
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
}

async function handleUserRole(req, res) {
    try {
        const user = await User.findOne({ username: req.username }).exec();
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
            success: true,
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            msg: '',
            success: false,
        })
    }
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
    handleUserInfo,
    handleUserRole,
}
