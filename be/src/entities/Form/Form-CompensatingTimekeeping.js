//chấm công bù

const mongoose = require('mongoose');

const compensatingTimekeepingShema = mongoose.Schema({
    username: {
        type: String,
    },
    fullName: {
        type: String,
    },
    approvedBy: {
        type: String,
    },
    department:{
        type: String, // 1 user - 1 department
    },
    reason: {
        type: String,
    },
    onDate: {
        type: String, // Date
    },
    isChecked: {
        type: Boolean,
        default: false,
    }
})

const Form_CompensatingTimekeeping = mongoose.model('Form_CompensatingTimekeeping', compensatingTimekeepingShema);

module.exports = Form_CompensatingTimekeeping