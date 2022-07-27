// ca làm việc

const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    startHours: {
        type: Date,
    },
    endHours: {
        type: Date,
    },
    applyForWeek: {
        type: Array,
        default: [1,2,3,4],
    },
    startShift: {
        type: Date,
    }
})

const Shift = mongoose.model('Shift', shiftSchema)

module.exports = {Shift, shiftSchema };