const express = require("express");
const PersonInformation = require("../entities/PersonalInformation");
const ContractInfo = require("../entities/ContractInformation");
const User = require("../entities/User")
const auth = require("../middlewares/auth")

const router = express.Router();

router.get('/profile', auth, async (req, res) =>{  
    try {
        const username = req.user.username;
        const user = await User.findOne({username: username});
        const personInfo = await PersonInformation.findOne({username: username});
        const contract = await ContractInfo.findOne({username: username});  
        if(!user || !personInfo || !contract){
            res.status(404).send({
                error: true,
                msg: "PersonInfo not found",
                success: false,
            })
        }
        res.status(200).json({
            user,
            personInfo,
            contract,
        })
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})

router.put('/profile',async (req, res) => {
    ///wae?
})

module.exports = router