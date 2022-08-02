const mongoose = require('mongoose');

async function connect(){   
    try {
        await mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/demo_KSE_dev");
        console.log('Connect DB successfully');
    } catch (error) {
        console.log('Connect DB failure');
    }
}

module.exports = { connect };   
