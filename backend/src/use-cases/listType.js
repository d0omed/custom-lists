const { Op } = require('sequelize')
const ListType = require('../models/ListType')

module.exports = {
  getAll({ limit = 10, offset = 0, name = '' }) {
    return ListType.findAndCountAll({
      limit, offset, where: {
        name: {
          [Op.like]: `${name}%`
        }
      }
    })
  },
  getOne(id) {
    return ListType.findByPk(id)
  },
  add(listType) {
    return ListType.create(listType)
  },
  update({ id, listType }) {
    return ListType.update(listType, { where: { id } })
  },
  remove(id) {
    return ListType.destroy({ where: { id } })
  }
}