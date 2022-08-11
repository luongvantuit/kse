const mongoose = require('mongoose');
// const mongoose = require('mongoose');

// async function connect(){   
//     try {
//         await mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/demo_KSE_dev");
//         console.log('Connect DB successfully');
//     } catch (error) {
//         console.log('Connect DB failure');
//     }
// }

// module.exports = { connect };   

mongoose.connect(process.env.MONGODB_URL ?? 'mongodb://localhost:27017/demo_kse_dev', 
     {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const conn = mongoose.connection;
conn.on('connected', function () {
    console.log('DB is connected successfully');
});
conn.on('disconnected', function () {
    console.log('DB is disconnected');
})
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = { conn };   
