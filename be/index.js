const express = require("express");
const { loadConfig } = require("./src/config/load-config");
const { port } = require("./src/config/server");
const db = require("./src/config/database");
const userRouter = require("./src/routes/user");
const publicBoard = require("./src/routes/publicBoard");
const personInfor = require("./src/routes/person");
const add_data = require("./src/routes/add_data_test");
/**
 * @type {express.Application}
 */
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.connect();
// add_data.add_data();


loadConfig();

app.use('/users', userRouter);

app.use('/publicBoard', publicBoard);

app.use('/personInfor', personInfor)

app.listen(port, () => {
    console.log(`Start server on port: ${port} 🚀 🚀 🚀`);
});
