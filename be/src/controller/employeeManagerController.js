const PersonalInformation = require("../entities/PersonalInformation");
const ContractInformation = require("../entities/ContractInformation");
const User = require("../entities/User");
async function handleGetEmployeeManager(req, res){
    try {
        const listPerson = await PersonalInformation.find();
        if (!listPerson) {
            return res.status(404).json({
                error: true,
                msg: 'Not Found',
                success: false,
            })
        }
        let arr = [];
        for (const person of listPerson) {
            console.log('person', person)
            arr.push(await ContractInformation.findOne({ username: person.username }));
        }
        if (arr.length == 0) {
            return res.status(404).json({
                error: true,
                msg: 'No contractInfo user',
                success: false,
            })
        }
        const contractInfo = [];
        for(let i = 0; i < arr.length; i++) {
            console.log('...listPerson[i]',listPerson[i]);
            const user = await User.findOne({username: listPerson[i].username});
            let a = {
                id: i,
                fullname: user.fullname,
                role: user.role,
                username: listPerson[i].username,
                department: listPerson[i].department,
                nameContract: arr[i].nameContract,
            }
            contractInfo.push(a);
        }
        return res.status(200).json({
            error: false,
            listPerson: contractInfo,
            msg: 'Successfully',
            success: true,
        })
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: 'Error: ' + error.message,
            success: false,
        })
    }
}

module.exports = {
    handleGetEmployeeManager
}
