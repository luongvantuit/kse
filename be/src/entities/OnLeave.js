// nghỉ phép

const mongoose = require('mongoose');

const onLeaveShema = mongoose.Schema({
    name: {
        type: String,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    isWage: {
        type: Boolean,
        default: true,
    }
})

const OnLeave = mongoose.model('OnLeave', onLeaveShema);

module.exports = {OnLeave, onLeaveShema};