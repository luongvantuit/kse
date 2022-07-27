//  xin nghỉ phép

const mongoose = require('mongoose');
const onLeaveShema = mongoose.Schema({
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
        type: Date,
    },
    endTime: {
        type: Date,
    }
})

const Form_OnLeave = mongoose.model('Form_OnLeave', onLeaveShema);

module.exports = Form_OnLeave;