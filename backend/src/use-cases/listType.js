const { Op } = require('sequelize')
const ListType = require('../models/ListType')
const { NotFoundError } = require('../classes/errors')

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
  async update({ id, listType }) {
    const exists = await ListType.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListType.update(listType, { where: { id } })
  },
  async remove(id) {
    const exists = await ListType.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListType.destroy({ where: { id } })
  }
}