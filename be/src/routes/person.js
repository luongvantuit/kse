const express = require("express");
const PersonInformation = require("../entities/PersonalInformation");
const ContractInfo = require("../entities/ContractInformation");
const User = require("../entities/User");
const auth = require("../middlewares/auth");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const username = req.user.username;
        const user = await User.findOne({ username: username });
        const personInfo = await PersonInformation.findOne({ username: username });
        const contract = await ContractInfo.findOne({ username: username });
        if (!user || !personInfo || !contract) {
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
        res.status(500).send({ error: error.message });
    }
})

router.put('/', async (req, res) => {
    try {
        const user = req.body.user;
        if (!user) {
            res.status(404).json({
                error: true,
                msg: "User not found",
                success: false,
            })
        }
        await User.findOneAndReplace(
            {
                username: user.username,
            },
            {
                $set: {
                    password: await bcrypt.hash(user.password, await bcrypt.genSalt(8)),
                }
            }
        )
        const contractInfo = req.body.contractInfo;
        await ContractInfo.findOneAndUpdate(
            {
                username: user.username,
            },
            {
                $set: {
                    nameContract: contractInfo.nameContract,
                    startContract: contractInfo.startContract,
                    endContract: contractInfo.endContract,
                    contractTerm: contractInfo.contractTerm,
                }
            }
        )
        const personInfo = req.body.personInfo;
        await PersonInformation.findOneAndUpdate(
            {
                username: user.username,
            },
            {
                $set: {
                    gender: personInfo.gender,
                    birthday: personInfo.birthday,
                    CMND: personInfo.CMND,
                }
            }
        )
    } catch (error) {

    }
})

module.exports = router
