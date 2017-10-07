'use strict'

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
		tableName: 'notes',
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  })
  return Note
}
