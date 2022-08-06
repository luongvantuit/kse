// ca làm việc

const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
    nameShift: {
        type: String,
        unique: true,
    },
    startHours: {
        type: String,  // Date
    },
    endHours: {
        type: String,  // Date
    },
    applyForWeek: {
        type: Array,
        default: [1,2,3,4],
    },
    startShift: {
        type: Date,  // Date
    }
})

const Shift = mongoose.model('Shift', shiftSchema)

module.exports = Shift;