const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 9000 })
server.register(require('inert'), (err) => {
  if (err) throw err
})

module.exports = server
