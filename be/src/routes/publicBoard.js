// get thông tin người dùng và trả về bảng công tuỳ vào role

const express = require("express");
const router  = express.Router();
const auth = require("../middlewares/is-admin");

const WorkSheet = require("../entities/WorkSheet");
const PersonInformation = require("../entities/PersonalInformation");
const Department = require("../entities/Department");


router.get('/',auth,async(req,res)=>{
    try {
        const role = req.user.role;
        if(!role){
            return res.status(401).json({error: "Invalid Role"});
        } else if(role.includes('staff')){
            const staff = await WorkSheet.findOne({ username: req.user.username });
            if(!staff){
                return res.status(401).json({error: "Not found staff"});
            }
            return res.status(200).send({staff: staff});
        } else if(role.includes('manager')){
            const deparment = await Department.findOne({ admin: req.user.username });
            let arr = [];
            arr.push(await WorkSheet.find({department: deparment.nameDepartment}));
            if(arr.length == 0){
                return res.status(401).json({error: "Not found manager"});
            }
            return res.status(200).send({manager: arr});
        }
        // admin role
        const workSheet = await WorkSheet.find();
        if(!workSheet){
            return res.status(404).json({error: "Not found workSheet"});
        }
        return res.status(200).send({admin: workSheet});
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            msg: 'publicBoard',
            success: "Failed",
        })
    }
})

module.exports = router;