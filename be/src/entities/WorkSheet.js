// bảng công

const mongoose = require('mongoose');

const workSheetShema = mongoose.Schema({
    fullname: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        default: '',
    },
    workNumber: {
        type: Number,
        default: 0,
    },
    holidaysNumber: {
        type: Number,
        default: 0,
    },
    nghi_phep_co_luong: {
        type: Number,
        default: 0,
    },
    nghi_phep_ko_luong: {
        type: Number,
        default: 0,
    },
    sumWorkNumber: {
        type: Number,
        default: 0,
    },
    onMonth: {
        type: Number,
        default: new Date().getMonth() + 1,
    }
})

const WorkSheet = mongoose.model('WorkSheet', workSheetShema);

module.exports = WorkSheet;