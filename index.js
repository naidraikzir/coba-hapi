'use strict'

require('dotenv').config()

const server = require('./server')
const io = require('socket.io')(server.listener)
require('./routes')(server)
require('./socket')(io)
