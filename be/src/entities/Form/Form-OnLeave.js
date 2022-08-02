//  xin nghỉ phép

const mongoose = require('mongoose');
const onLeaveShema = mongoose.Schema({
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

const Form_OnLeave = mongoose.model('Form_OnLeave', onLeaveShema);

module.exports = Form_OnLeave;