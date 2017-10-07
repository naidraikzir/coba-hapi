const users = require('./users')

module.exports = (server) => {
	return server.register(require('inert'), (err) => {
		if (err) throw err

		server.route({
			method: 'GET',
			path: '/',
			handler: (request, reply) => reply.file(
				__dirname + '/../views/index.html'
			)
		})

		users(server)

		server.route({
			method: 'GET',
			path: '/socket',
			handler: (request, reply) => reply.file(
				__dirname + '/../views/socket.html'
			)
		})

		server.start((err) => {
			if (err) throw err
			console.log('Server running at:', server.info.uri)
		})
	})
}
