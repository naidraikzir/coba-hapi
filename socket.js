module.exports = function (io) {
	let visits = 0

	io.on('connection', (socket) => {
		socket.on('visit', (data) => {
			visits++
			io.sockets.emit('visited', { visits })
		})
	})
}
