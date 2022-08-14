const express = require('express');
const { loadConfig } = require("./src/config/load-config");
const { port } = require("./src/config/server");
const userRouter = require("./src/routes/user");
const publicBoard = require("./src/routes/publicBoard");
const profile = require("./src/routes/profile");
const uploadImage = require("./src/routes/uploadImage");
const connectDB = require("./src/config/database");
const cors = require('cors')

loadConfig();

/**
 * @type {express.Application}
 */

const app = express();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mainRouter = express.Router();

mainRouter.use('/users', userRouter);

mainRouter.use('/publicBoard', publicBoard);

mainRouter.use('/profile', profile);

mainRouter.use('/uploadImage', uploadImage);

app.use('/api', mainRouter);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL ?? "mongodb://localhost:27017/kse");
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();


