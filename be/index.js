const express = require("express");
const { loadConfig } = require("./src/config/load-config");
const { port } = require("./src/config/server");
const db = require("./src/config/database");
const userRouter = require("./src/routes/user");
const publicBoard = require("./src/routes/publicBoard");
const profile = require("./src/routes/person");

/**
 * @type {express.Application}
 */
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.connect();

loadConfig();

const mainRouter = express.Router()

mainRouter.use('/users', userRouter);

mainRouter.use('/publicBoard', publicBoard);

mainRouter.use('/profile', profile);

app.use('/api', mainRouter)

app.listen(port, () => {
    console.log(`Start server on port: ${port} 🚀 🚀 🚀`);
});
