const { getAll, getOne, add, remove, update } = require('../data-access/listTypeField')
const makeGenericController = require('./utils/genericController')

module.exports = makeGenericController({ getAll, getOne, add, remove, update })