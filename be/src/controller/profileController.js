const PersonInformation = require("../entities/PersonalInformation");
const ContractInfo = require("../entities/ContractInformation");
const User = require("../entities/User");
const bcrypt = require("bcrypt");

async function handleGetProfile(req, res) {
    try {
        const username = req.headers.username;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({
                error: true,
                msg: "User not found",
                sucess: false,
            })
        }
        // console.log(user);
        const personInfo = await PersonInformation.findOne({ username: username });
        const contract = await ContractInfo.findOne({ username: username });
        if (!user || !personInfo || !contract) {
            return res.status(404).json({
                error: true,
                msg: "PersonInfo not found",
                success: false,
            })
        }
        return res.status(200).json({
            profile: [
                user,
                personInfo,
                contract,
            ],
            success: true,
        })
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: error.message,
            success: false,
        });
    }
}

async function handleGetProfileByToken(req, res) {
    try {
        const username = req.username;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({
                error: true,
                msg: "User not found",
                sucess: false,
            })
        }
        // console.log(user);
        const personInfo = await PersonInformation.findOne({ username: username });
        const contract = await ContractInfo.findOne({ username: username });
        if (!user || !personInfo || !contract) {
            return res.status(404).json({
                error: true,
                msg: "PersonInfo not found",
                success: false,
            })
        }
        return res.status(200).json({
            profile: [
                user,
                personInfo,
                contract,
            ],
            success: true,
        })
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: error.message,
            success: false,
        });
    }
}

async function handlePutProfile(req, res) {
    try {
        const user = req.body.user;
        if (!user) {
            return res.status(404).json({
                error: true,
                msg: "User not found",
                success: false,
            })
        }
        if (user.password === '') {
            await User.findOneAndUpdate(
                {
                    username: user.username,
                },
                {
                    $set: {
                        fullname: user.fullname,
                    }
                }
            )
        } else {
            await User.findOneAndUpdate(
                {
                    username: user.username,
                },
                {
                    $set: {
                        password: await bcrypt.hash(user.password, await bcrypt.genSalt(8)),
                        fullname: user.fullname,
                    }
                }
            )
        }

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
                    department: personInfo.department,
                    workingMode: personInfo.workingMode,
                }
            }
        )
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(error.statusCode).json({
            error: true,
            msg: error.message,
            success: false,
        })
    }
}

module.exports = {
    handleGetProfile,
    handlePutProfile,
    handleGetProfileByToken
}