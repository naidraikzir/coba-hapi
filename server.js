const Hapi = require('hapi')
const port = process.env.PORT || 9000

const server = new Hapi.Server()
server.connection({ port })

const getDate = () => {
  const today = new Date
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

const goodOptions = {
  reporters: {
    myFileReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', error: '*' }]
    }, {
      module: 'good-squeeze',
      name: 'SafeJson'
    }, {
      module: 'good-file',
      args: [ __dirname + `/logs/${getDate()}.log` ]
    }]
  }
}

server.register([
  {
    register: require('good'),
    options: goodOptions
  },
  require('inert')
], (err) => {
  if (err) throw err
})

module.exports = server
