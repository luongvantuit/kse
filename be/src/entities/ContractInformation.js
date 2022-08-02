//thông tin hợp đồng
const mongoose = require('mongoose');

const contractInformationShema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    nameContract: {
        type: String,
        default: '',
    },
    startContract: {
        type: String,  // Date
        default: '',
    },
    endContract: {
        type: String,  // Date
        default: '',
    },
    contractTerm: {
        type: Number, // miliseconds
        default: 0,
    }
})

const ContractInformation = mongoose.model('ContractInformation', contractInformationShema);

module.exports = ContractInformation;