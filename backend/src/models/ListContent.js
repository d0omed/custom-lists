const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class ListContent extends Model { }

ListContent.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  listType: {
    type: DataTypes.NUMBER,
    references: {
      model: 'listType',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'listContent'
})

module.exports = ListContent