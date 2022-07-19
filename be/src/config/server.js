const { loadConfig } = require("./load-config");

loadConfig();

const serverConfig = {
  port: Number(process.env.PORT) || 8080,
  jwtSecretKey: process.env.JWT_SECRET_KEY || "AZ626GRT4QVSCPXJNCSH",
  databaseHost: process.env.DATABASE_HOST || "localhost",
  databasePort: Number(process.env.DATABASE_PORT) || 5432,
  databaseName: process.env.DATABASE_NAME || "dev",
  databaseUsername: process.env.DATABASE_USERNAME || "admin",
  databasePassword: process.env.DATABASE_PASSWORD || "123456"
};

module.exports = {
  serverConfig,
  ...serverConfig,
};
