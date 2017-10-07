'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
		email: DataTypes.STRING
  }, {
		tableName: 'users',
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  })
  return User
}
