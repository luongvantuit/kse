const User = require("../entities/User");
const WorkSheet = require("../entities/WorkSheet");
const Department = require("../entities/Department");

async function handleGetPublicBoard(req, res) {
    try {
        const month = req.headers.month;
        const user = await User.findOne({ username: req.username });
        if (!user) {
            return res.status(403).json({
                error: true,
                msg: 'Not found user from token',
                success: false,
            })
        }
        const role = user.role;
        if (!role) {
            return res.status(401).json({ error: "Invalid Role" });
        } else if (role.includes('staff')) {
            const staff = await WorkSheet.findOne({ username: user.username });
            console.log([staff]);
            if (!staff) {
                return res.status(401).json({ error: "Not found staff" });
            }
            return res.status(200).json({ publicBoard: [staff] });
        } else if (role.includes('manager')) {
            const deparment = await Department.findOne({ admin: user.username });
            const arr = await WorkSheet.find({ department: deparment.nameDepartment });
            if (arr.length == 0) {
                return res.status(401).json({ error: "Not found manager" });
            }
            console.log(arr);
            return res.status(200).json({ publicBoard: arr });
        }
        // admin role
        const workSheet = await WorkSheet.find({ onMonth: month});
        if (!workSheet) {
            return res.status(404).json({ error: "Not found workSheet" });
        }
        return res.status(200).json({ publicBoard: workSheet });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'publicBoard',
            success: "Failed",
        })
    }
}

async function handleUpdateBoard(req, res) {
    try {
        const username = req.username;
        const month = req.body.month;
        const workSheetUser = await WorkSheet.findOne({
            username: username,
            onMonth: month,
        });
        if (!workSheetUser) {
            return res.status(404).json({
                error: true,
                msg: 'Not Found',
                success: false,
            })
        }
        const update = await WorkSheet.findOneAndUpdate(
            {
                username: username,
                onMonth: month,
            },
            {
                $set: {
                    workNumber: workSheetUser.workNumber + 1,
                    sumWorkNumber: workSheetUser.sumWorkNumber + 1,
                }
            }
        )
        return res.status(200).json( {
            error: false,
            update: update,
            msg: 'Successfully',
            success: true,
        })
    } catch (error) {
        return res.status(500).json( {
            error: true,
            msg: 'Error processing',
            success: false,
        })
    }
}

module.exports = {
    handleGetPublicBoard,
    handleUpdateBoard
}