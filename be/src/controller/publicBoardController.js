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
            const staff = await WorkSheet.findOne(
                {
                    username: user.username,
                    onMonth: month,
                }
            );
            console.log([staff]);
            if (!staff) {
                return res.status(401).json(
                    {
                        error: "Not found staff",
                    }
                );
            }
            return res.status(200).json({ publicBoard: [staff] });
        } else if (role.includes('manager')) {
            const deparment = await Department.findOne({ admin: user.username });
            const arr = await WorkSheet.find(
                {
                    department: deparment.nameDepartment,
                    onMonth: month,
                }
            );
            if (arr.length == 0) {
                return res.status(401).json({ error: "Not found manager" });
            }
            console.log(arr);
            return res.status(200).json({ publicBoard: arr });
        }
        // admin role
        const workSheet = await WorkSheet.find({ onMonth: month });
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
        const month = req.body.onMonth;
        const workSheetUser = await WorkSheet.findOne({
            username: username,
            onMonth: month,
        });
        if (!workSheetUser) {
            const workSheet = await WorkSheet.findOne(
                {
                    username: username,
                }
            )
            const newWorkSheet = await WorkSheet(
                {
                    fullname: workSheet.fullname,
                    username: workSheet.username,
                    department: workSheet.department,
                    onMonth: month,
                }
            )
            await newWorkSheet.save();
            // return res.status(404).json({
            //     error: true,
            //     msg: 'Not Found workSheetUser',
            //     success: false,
            // })
        }
        await WorkSheet.findOneAndUpdate(
            {
                username: username,
                onMonth: month,
            },
            {
                $set: {
                    workNumber: workSheetUser.workNumber + 1,
                    sumWorkNumber: workSheetUser.workNumber + 1 +
                        workSheetUser.holidaysNumber +
                        workSheetUser.nghi_phep_co_luong -
                        workSheetUser.nghi_phep_ko_luong,
                }
            }
        )
        return res.status(200).json({
            error: false,
            msg: 'Successfully',
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
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