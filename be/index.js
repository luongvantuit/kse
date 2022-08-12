const express = require('express');
const { loadConfig } = require("./src/config/load-config");
const userRouter = require("./src/routes/user");
const publicBoard = require("./src/routes/publicBoard");
const profile = require("./src/routes/profile");
const uploadImage = require("./src/routes/uploadImage");

loadConfig();

/**
 * @type {express.Application}
 */
const app = require("./src/config/database");



// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mainRouter = express.Router();

mainRouter.use('/users', userRouter);

mainRouter.use('/publicBoard', publicBoard);

mainRouter.use('/profile', profile);

mainRouter.use('/uploadImage', uploadImage);

app.use('/api', mainRouter);

// app.listen(port, () => {
//     console.log(`Start server on port: ${port} 🚀 🚀 🚀`);
// });
