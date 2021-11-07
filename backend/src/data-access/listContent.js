const { ListContent } = require('../models')
const { NotFoundError } = require('../classes/errors')

module.exports = {
  getAll({ limit = 10, offset = 0, listTypeId }) {
    return ListContent.findAndCountAll({
      limit, offset, ...(listTypeId && { where: { listTypeId } })
    })
  },
  getOne(id) {
    return ListContent.findByPk(id)
  },
  add(ListContent) {
    return ListContent.create(ListContent)
  },
  async update({ id, ListContent }) {
    const exists = await ListContent.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListContent.update(ListContent, { where: { id } })
  },
  async remove(id) {
    const exists = await ListContent.findByPk(id)
    if (!exists) {
      throw new NotFoundError()
    }
    return ListContent.destroy({ where: { id } })
  }
}