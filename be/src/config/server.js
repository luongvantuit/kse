const { loadConfig } = require("./load-config");

loadConfig();

const serverConfig = {
  port: Number(process.env.PORT) || 8080,
  jwtSecretKey: process.env.JWT_SECRET_KEY || "AZ626GRT4QVSCPXJNCSH"
};

module.exports = {
  serverConfig,
  ...serverConfig,
};
