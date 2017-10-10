const Boom = require('boom')
const db = require('../models')

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/users/{user?}',
    handler: (request, reply) => {
      let user = encodeURIComponent(request.params.user)
      if (user !== 'undefined' && user !== '') {
        db.User.findOne({
          where: {
            name: user
          }
        }).then((user, cik) => {
          if (user) {
            reply(user)
          } else {
            reply(Boom.notFound())
          }
        })
      } else {
        db.User.all()
          .then((users) => {
            reply(users)
          })
      }
    } 
  })
}
