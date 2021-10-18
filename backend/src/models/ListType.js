const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class ListType extends Model { }

ListType.init({
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
  modelName: 'listType'
})

module.exports = ListType