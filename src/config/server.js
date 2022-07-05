const { loadConfig } = require("./load-config");

loadConfig();

const serverConfig = {
  port: Number(process.env.PORT) || 8080,
};

module.exports = {
  serverConfig,
  ...serverConfig,
};
