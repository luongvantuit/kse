const mongoose = require("mongoose");
const uri = "mongodb+srv://admin123:admin123@kse-demo.dqhhlcr.mongodb.net/?retryWrites=true&w=majority";
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
