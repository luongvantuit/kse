const { config } = require("dotenv");
const { join } = require("path");

function loadConfig() {
  config({
    path: join(process.cwd(), ".env"),
  });
}

module.exports = {
  loadConfig,
};
