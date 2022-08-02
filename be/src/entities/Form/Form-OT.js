//  OT

const mongoose = require('mongoose');
const otShema = mongoose.Schema({
    idDepartment: { 
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
        type: String,  // Date
    },
    endTime: {
        type: String,  // Date
    }
})

const Form_OT = mongoose.model('Form_OT', otShema);

module.exports = Form_OT;