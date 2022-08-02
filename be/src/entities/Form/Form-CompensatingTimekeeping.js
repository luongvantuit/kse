//chấm công bù

const mongoose = require('mongoose');

const compensatingTimekeepingShema = mongoose.Schema({
    username: {
        type: String,
    },
    department:{
        type: String, // 1 user - 1 department
    },
    reason: {
        type: String,
    },
    approvedBy: {
        type: String,
    },
    onDate: {
        type: String, // Date
    },
    startTime: {
        type: String,  // Date
    },
    endTime: {
        type: String,  // Date
    }
})

const Form_CompensatingTimekeeping = mongoose.model('Form_CompensatingTimekeeping', compensatingTimekeepingShema);

module.exports = Form_CompensatingTimekeeping