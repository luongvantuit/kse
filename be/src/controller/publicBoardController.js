const User = require("../entities/User");
const WorkSheet = require("../entities/WorkSheet");
const Department = require("../entities/Department");

async function handleGetPublicBoard(req, res) {
    try {
        const user = await User.findOne({ username: req.username});
            if(!user){
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
            if (!staff) {
                return res.status(401).json({ error: "Not found staff" });
            }
            return res.status(200).json({ staff: staff });
        } else if (role.includes('manager')) {
            const deparment = await Department.findOne({ admin: user.username });
            let arr = [];
            arr.push(await WorkSheet.find({ department: deparment.nameDepartment }));
            if (arr.length == 0) {
                return res.status(401).json({ error: "Not found manager" });
            }
            return res.status(200).json({ manager: arr });
        }
        // admin role
        const workSheet = await WorkSheet.find();
        if (!workSheet) {
            return res.status(404).json({ error: "Not found workSheet" });
        }
        return res.status(200).json({ admin: workSheet });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'publicBoard',
            success: "Failed",
        })
    }
}

module.exports = {
    handleGetPublicBoard,
}