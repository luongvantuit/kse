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
    startTime: {
        type: String,  // Date
    },
    endTime: {
        type: String,  // Date
    },
    morning: {
        type: Boolean,
        default: false,
    },
    afternoon: {
        type: Boolean,
        default: false,
    },
    date: {
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