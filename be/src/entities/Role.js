const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: Number,
        default: 0 //staff
    }
})

const Role = mongoose.model('Role',roleSchema);

module.exports = Role;

// chắc ko cần đâu
