const express = require('express');
const mongoose = require('mongoose');
const { port } = require("./server");

const app = express();

module.exports = app;

// async function connect(){   
//     try {
//         await mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/kse");
//         console.log('Connect DB successfully');
//     } catch (error) {
//         console.log('Connect DB failure');
//     }
// }

connect();

function listen() {
    app.listen(port, () => {
        console.log(`Start server on port: ${port} 🚀 🚀 🚀`);
    });
}

function connect() {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connect)
        .on('connected', function () {
            console.log('DB is connected successfully');
        })
        .once('open', listen);
    return mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/kse", {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}


// mongoose.connect(process.env.MONGODB_URL ?? 'mongodb://localhost:27017/demo_kse_dev',
//      {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
// const conn = mongoose.connection;
// conn.on('connected', function () {
//     console.log('DB is connected successfully');
// });
// conn.on('disconnected', function () {
//     console.log('DB is disconnected');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));

// module.exports = { conn };

// module.exports = { connect };
