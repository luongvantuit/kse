const mongoose = require('mongoose');

const department = new mongoose.Schema({
    admin:{
        type: String,
        required: true,
    },
    nameDepartment: {
        type: String,
    },
    numberOfEmployees: {
        type: Number,
        default: 0,
    },
    timekeepingPolicy: {
        type: String, // timekeepingPolicyShema is used
    }
})

const Department = mongoose.model('Departments', department);

module.exports = Department;