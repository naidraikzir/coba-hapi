const db = require('./db')()
db.connect()

module.exports = function (server) {
	return server.register(require('inert'), (err) => {
		if (err) throw err

		server.route({
			method: 'GET',
			path: '/',
			handler: (request, reply) => reply.file('index.html')
		})

		server.route({
			method: 'GET',
			path: '/users/{user?}',
			handler: (request, reply) => {
				let user = encodeURIComponent(request.params.user)
				if (user !== 'undefined') {
					reply(`Hello ${user}!`)
				} else {
					db.query('SELECT * FROM users', (err, rows, query) => {
						if (err) throw err
						rows = rows.map((row) => `Hello ${row.name}`)
						reply(rows)
					})
				}
			}	
		})

		server.route({
			method: 'GET',
			path: '/socket',
			handler: (request, reply) => reply.file('socket.html')
		})

		server.start((err) => {
			if (err) throw err
			console.log('Server running at:', server.info.uri)
		})
	})
}
