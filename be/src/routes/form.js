const express = require("express");
const Form_CompensatingTimekeeping = require("../entities/Form/Form-CompensatingTimekeeping");
const Form_OnLeave = require("../entities/Form/Form-OnLeave");
const Form_OT = require("../entities/Form/Form-OT");
const auth = require("../middlewares/verify-token");
const PersonInformation = require("../entities/PersonalInformation");
const Department = require("../entities/Department")
const router = express.Router();

router.get('/form-CompensatingTimekeeping', auth.verifyIdToken, async (req, res) => {
    const username = req.username;
    if (!username) return res.status(401).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const department = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ username: username });
        return res.status(200).json({
            success: true,
            form_CompensatingTimekeeping: {
                department: department.department,
                username: username,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'get form-CompensatingTimekeeping',
            success: false,
        });
    }
})

router.put('/form-CompensatingTimekeeping', async (req, res) => {
    try {
        await Form_CompensatingTimekeeping.findOneAndUpdate(
            {
                username: req.body.username,
            },
            {
                $set: {
                    department: req.body.department,
                    reason: req.body.reason,
                    onDate: req.body.onDate,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                }
            }
        );
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: 'post form-CompensatingTimekeeping',
            success: false,
        });
    }
})

router.get('/form-OnLeave', auth.verifyIdToken, async (req, res) => {
    const username = req.username;
    if (!username) return res.status(401).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const department = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ username: username });
        return res.status(200).json({
            success: true,
            form_CompensatingTimekeeping: {
                username: username,
                department: department.department,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'get form-OnLeave',
            success: false,
        });
    }
})

router.put('/form-OnLeave', async (req, res) => {
    try {
        await Form_OnLeave.findOneAndUpdate(
            {
                username: req.body.username,
            },
            {
                $set:
                {
                    reason: req.body.reason,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                }
            })
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: 'post form-OnLeave',
            success: false,
        });
    }
})

router.get('/form-OT', auth, async (req, res) => {
    const username  = req.username;
    if (!user) return res.status(401).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const department = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ username: username });
        return res.status(200).json({
            success: true,
            form_CompensatingTimekeeping: {
                username: username,
                department: department.department,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'get form-OT',
            success: false,
        });
    }
})

router.put('/form-OT', async (req, res) => {
    try {
        await Form_OT.findOneAndUpdate(
            { username: req.body.username },
            {
                $set: {
                    reason: req.body.reason,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                }
            }
        )
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'post form-OT',
            success: false,
        });
    }
})

module.exports = router;
