'use strict'

const Hapi = require('hapi')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'coba_hapi'
})
connection.connect()

const server = new Hapi.Server()
server.connection({ port: 9000 })
const io = require('socket.io')(server.listener)

server.register(require('inert'), (err) => {
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
				connection.query('SELECT * FROM users', (err, rows, query) => {
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

io.on('connection', (socket) => {
	socket.emit('test', { message: 'Hello from socket.io' })
	socket.on('reply', (data) => {
		console.log(data)
	})
})
