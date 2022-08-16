const ContractInformation = require("../entities/ContractInformation");
const PersonInformation = require("../entities/PersonalInformation");
const WorkSheet = require("../entities/WorkSheet");
const Department = require('../entities/Department');
const ImageModel = require('../entities/ImageModel');

async function create( username, contractInfo, personInfo, role) {
    try {
        const contract = new ContractInformation({
            username: username,
            nameContract: contractInfo.nameContract,
            startContract: contractInfo.startContract,
            endContract: contractInfo.endContract,
            contractTerm: contractInfo.contractTerm,
        });
        await contract.save();
        const person = new PersonInformation({
            username: username,
            gender: personInfo.gender,
            birthday: personInfo.birthday,
            CMND: personInfo.CMND,
            department: personInfo.department,
            workingMode: personInfo.workingMode,
        })
        await person.save();
        const workSheet = new WorkSheet({
            username: username,
        })
        await workSheet.save();
        const image = new ImageModel({
            username: username,
        })
        await image.save();
        if(role == 'manager'){
            const department = new Department({
                admin: username,
            });
            await department.save();
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {create}
