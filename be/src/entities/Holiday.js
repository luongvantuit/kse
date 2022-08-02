// nghỉ lễ

const mongoose = require('mongoose');

const holidayShema = mongoose.Schema({
    nameHoliday: {
        type: String,
    },
    countHolidays: {
        type: Number,
    },
    isWage: {
        type: Boolean,
        default: false,
    }
})

const Holiday = mongoose.model('Holiday', holidayShema);

module.exports = Holiday ;
