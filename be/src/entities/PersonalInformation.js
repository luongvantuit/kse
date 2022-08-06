// thông tin cá nhân

const mongoose = require('mongoose');

const personInformationShema  = mongoose.Schema({
    username: {
        type: String,
    },
    gender: {
        type: Boolean,
        default: false,
    },
    birthday: {
        type: String,
        default: '',
    },
    CMND: {
        type: Number,
        length: 8,
        default: null,
    },
    department: {
        type: String,
        default: '',
    },
    workingMode: {
        type: String,
        default: '',
    }
})

const PersonInformation = mongoose.model('PersonInformation', personInformationShema);

module.exports = PersonInformation;