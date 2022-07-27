// chính sách chấm công

const mongoose = require('mongoose');
const Shift = require('./Shift');
const Holiday = require('./Holiday');
const OnLeave = require('./OnLeave');

const timekeepingPolicyShema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    shift: {
        type: Shift.shiftSchema,
    },
    onLeave: {
        type: OnLeave.onLeaveShema,
    },
    holiday: {
        type: Holiday.holidayShema,
    }
    
})

const TimekeepingPolicy = mongoose.model('TimekeepingPolicy',timekeepingPolicyShema);

module.exports = {TimekeepingPolicy, timekeepingPolicyShema};