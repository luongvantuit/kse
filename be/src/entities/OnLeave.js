// nghỉ phép

const mongoose = require('mongoose');

const onLeaveShema = mongoose.Schema({
    nameOnLeave: {
        type: String,
    },
    startTime: {
        type: String,  // Date
    },
    endTime: {
        type: String,  // Date
    },
    isWage: {
        type: Boolean,
        default: true,
    }
})

const OnLeave = mongoose.model('OnLeave', onLeaveShema);

module.exports = OnLeave;