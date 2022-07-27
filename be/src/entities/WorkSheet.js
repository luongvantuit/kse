// bảng công

const mongoose = require('mongoose');

const workSheetShema = mongoose.Schema({
    username: {
        type: String,
    },
    department: {
        type: String,
    },
    workNumber: {
        type: Number,
    },
    holidayNumber: {
        type: Number,
    },
    nghi_phep_co_luong: {
        type: Number,
    },
    nghi_phep_ko_luong: {
        type: Number,
    },
    sumWorkNumber: {
        type: Number,
    },
    onMonth: {
        type: Number,
    }
})

const WorkSheet = mongoose.model('WorkSheet', workSheetShema);

module.exports = WorkSheet;