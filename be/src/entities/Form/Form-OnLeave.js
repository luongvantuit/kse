//  xin nghỉ phép

const mongoose = require('mongoose');
const onLeaveShema = mongoose.Schema({
    username: {
        type: String,
    },
    fullName: {
        type: String,
    },
    reason: {
        type: String,
    },
    approvedBy: {
        type: String,
    },
    department: {
        type: String,
        default: '',
    },
    morning: {
        type: Boolean,
        default: false,
    },
    afternoon: {
        type: Boolean,
        default: false,
    },
    startDate: {
        type: String,
        default: ''
    },
    endDate: {
        type: String,
        default: ''
    },
    countDate: {
        type: Number,
        default: 0,
    },
    isChecked: {
        type: Boolean,
        default: false,
    },
    isCheckedSalary: {
        type: Boolean,
        default: null,
    }
})

const Form_OnLeave = mongoose.model('Form_OnLeave', onLeaveShema);

module.exports = Form_OnLeave;