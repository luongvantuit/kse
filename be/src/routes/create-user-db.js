const ContractInformation = require("../entities/ContractInformation");
const PersonInformation = require("../entities/PersonalInformation");
const WorkSheet = require("../entities/WorkSheet");

async function create(username, role) {
    try {
        const contract = new ContractInformation({
            username: username,
        });
        await contract.save();
        const personInfo = new PersonInformation({
            username: username,

        })
        await personInfo.save();
        const workSheet = new WorkSheet({
            username: username,
        })
        await workSheet.save();
        if(role == 'manager'){
            const Department = require('../entities/Department');
            const department = new Department({
                admin: username,
            });
            await department.save();
        }
    } catch (error) {
        throw new Error({
            error: true,
            msg: error.message,
            success: false,
        })
    }
}

module.exports = {create}
