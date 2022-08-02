// chính sách chấm công

const mongoose = require('mongoose');

const timekeepingPolicyShema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    shift: {
        type: String,
        default: '',
    },
    onLeave: {
        type: String,
        default: '',
    },
    holiday: {
        type: String,
        default: '',
    }
    
})

const TimekeepingPolicy = mongoose.model('TimekeepingPolicy',timekeepingPolicyShema);

module.exports = TimekeepingPolicy;