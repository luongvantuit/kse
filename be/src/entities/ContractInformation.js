//thông tin hợp đồng
const mongoose = require('mongoose');

const contractInformationShema = mongoose.Schema({
    name: {
        type: String,
    },
    startContract: {
        type: Date,
    },
    endContract: {
        type: Date,
    },
    contractTerm: {
        type: String,
    }
})

const ContractInformation = mongoose.model('ContractInformation', contractInformationShema);

module.exports = {ContractInformation, contractInformationShema};