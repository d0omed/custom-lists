const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class ListTypeField extends Model { }
ListTypeField.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  sequelize,
  modelName: 'listTypeField'
})

module.exports = ListTypeField