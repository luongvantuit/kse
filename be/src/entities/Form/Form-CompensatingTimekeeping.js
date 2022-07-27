//chấm công bù

const mongoose = require('mongoose');

const compensatingTimekeepingShema = mongoose.Schema({
    idDepartment:{
        type: String,
    },
    username: {
        type: String,
    },
    reason: {
        type: String,
    },
    approvedBy: {
        type: String,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    }
})

const Form_CompensatingTimekeeping = mongoose.model('Form_CompensatingTimekeeping', compensatingTimekeepingShema);

module.exports = Form_CompensatingTimekeeping