'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const models = require('../utils/list-all')()
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]
const db = {}
let sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

models
  .map((file) => {
    let model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
