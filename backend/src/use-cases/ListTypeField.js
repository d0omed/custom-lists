const { ListTypeField } = require('../models')
const { NotFoundError } = require('../classes/errors')

module.exports = {
  getAll({ limit = 10, offset = 0, listTypeId }) {
    return ListTypeField.findAndCountAll({
      limit, offset, ...(listTypeId && { where: { listTypeId } })
    })
  },
  getOne(id) {
    return ListTypeField.findByPk(id)
  },
  add(listTypeField) {
    return ListTypeField.create(listTypeField)
  },
  async update({ id, listTypeField }) {
    const exists = await ListTypeField.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListTypeField.update(listTypeField, { where: { id } })
  },
  async remove(id) {
    const exists = await ListTypeField.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListTypeField.destroy({ where: { id } })
  }
}