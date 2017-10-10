const routes = require('../utils/list-all')()

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply('Hello Badass!')
  })

  server.route({
    method: 'POST',
    path: '/',
    handler: (request, reply) => reply(request.payload)
  })

  server.route({
    method: 'GET',
    path: '/socket',
    handler: (request, reply) => reply.file(
      __dirname + '/../views/socket.html'
    )
  })

  // add all file based routes in routes dir
  for (let route of routes) {
    require(`./${route}`)(server)
  }
}
