// thông tin cá nhân

const mongoose = require('mongoose');

const personInformationShema  = mongoose.Schema({
    name: {
        type: String,
    },
    gender: {
        type: Boolean,
    },
    birthday: {
        type: Date,
    },
    CMND: {
        type: Number,
        length: 12,
    },
    department: {
        type: Array,
    },
    workingMode: {
        type: String,
    }
})

const PersonInformation = mongoose.model('PersonInformation', personInformationShema);

module.exports = {PersonInformation, personInformationShema};