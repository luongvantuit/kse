var typeorm = require('typeorm')
const { serverConfig } = require('./server')

const databaseConnection = typeorm.createConnection({
    type: "postgres",
    host: serverConfig.databaseHost,
    port: serverConfig.databasePort,
    database: serverConfig.databaseName,
    username: serverConfig.databaseUsername,
    password: serverConfig.databasePassword
})

module.exports = {
    databaseConnection  
}