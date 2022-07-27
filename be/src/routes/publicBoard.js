// get thông tin người dùng và trả về bảng công tuỳ vào role

const express = require("express");
const router  = express.Router();
const auth = require("../middlewares/is-admin");

const WorkSheet = require("../entities/WorkSheet");
const person = require("../entities/PersonalInformation");
const Department   = require("../entities/Department");


const PersonInformation = person.PersonInformation;

router.get('/',auth,async(req,res)=>{
    try {
        const role = req.user.role;
        if(!role){
            return res.status(401).json({error: "Invalid Role"});
        } else if(role.includes('staff')){
            const staff = await WorkSheet.findOne({ username: req.user.username });
            if(!staff){
                return res.status(401).json({error: "Not found"});
            }
            return res.status(200).send({staff: staff});
        } else if(role.includes('manager')){
            const deparment = await Department.findOne({ username: req.user.username });
            console.log(deparment);
            const peopleInManager = await PersonInformation.find({ department:deparment.name});
            let arr = [];
            for(const person of peopleInManager){
                arr.push(await WorkSheet.findOne({username: person.name}));
            }
            if(!arr){
                return res.status(401).json({error: "Not Found"});
            }
            return res.status(200).send({manager: arr});
        }
        // admin role
        const workSheet = await WorkSheet.find();
        if(!workSheet){
            return res.status(404).json({error: "WorkSheet not found"});
        }
        return res.status(200).send({workSheet: workSheet});
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            msg: 'publicBoard',
            success: "Failed",
        })
    }
})

module.exports = router;