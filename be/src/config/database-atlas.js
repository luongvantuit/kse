const mongoose = require("mongoose");
const username = encodeURIComponent("admin123");
const password = encodeURIComponent("admin123");
const cluster = 'kse-demo.dqhhlcr.mongodb.net';
const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;
conn.on('connected', function () {
    console.log('DB is connected successfully');
});
conn.on('disconnected', function () {
    console.log('DB is disconnected');
})
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = { conn };
