const express = require("express");
const { loadConfig } = require("./src/config/load-config");
const { port } = require("./src/config/server");

/**
 * @type {express.Application}
 */
const app = express();

loadConfig();

app.listen(port, ()=>{
    console.log(`Start server on port: ${port} 🚀🚀🚀`);
});
