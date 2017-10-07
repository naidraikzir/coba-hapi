const db = require('./models')

module.exports = (server) => {
	return server.register(require('inert'), (err) => {
		if (err) throw err

		server.route({
			method: 'GET',
			path: '/',
			handler: (request, reply) => reply.file('./views/index.html')
		})

		server.route({
			method: 'GET',
			path: '/users/{user?}',
			handler: (request, reply) => {
				let user = encodeURIComponent(request.params.user)
				if (user !== 'undefined') {
					reply(`Hello ${user}!`)
				} else {
					reply(db.User.all())
				}
			}	
		})

		server.route({
			method: 'GET',
			path: '/socket',
			handler: (request, reply) => reply.file('./views/socket.html')
		})

		server.start((err) => {
			if (err) throw err
			console.log('Server running at:', server.info.uri)
		})
	})
}
