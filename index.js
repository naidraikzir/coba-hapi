'use strict'

require('dotenv').config()

const server = require('./server')
const io = require('socket.io')(server.listener)
require('./routes')(server)
require('./socket')(io)

server.start((err) => {
  if (err) throw err
  console.log('Server running at:', server.info.uri)
})
