const ListType = require('../models/ListType')

module.exports = {
  get({ limit = 10, offset = 0 }) {
    return ListType.findAndCountAll({ limit, offset })
  }
}