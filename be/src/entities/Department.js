const mongoose = require('mongoose');
const timekeepingPolicy = require('./TimekeepingPolicy');

const department = new mongoose.Schema({
    admin:{
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    numberOfEmployees: {
        type: Number,
        default: 0,
    },
    timekeepingPolicy: {
        type: timekeepingPolicy.timekeepingPolicyShema,
    }
})

const Department = mongoose.model('Departments', department);

module.exports = Department;