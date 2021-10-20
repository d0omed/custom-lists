const ListTypeField = require('./ListTypeField')
const ListType = require('./ListType')
const ListContent = require('./ListContent')

ListTypeField.belongsTo(ListType, { onDelete: 'CASCADE' })
ListContent.belongsTo(ListType, { onDelete: 'CASCADE' })
ListType.hasMany(ListTypeField)
ListType.hasMany(ListContent)

module.exports = {
  ListType,
  ListTypeField,
  ListContent,
}