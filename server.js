const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 9000 })

module.exports = server
