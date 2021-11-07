const { Router } = require('express')
const ListContentController = require('./listContent')
const ListTypeController = require('./listType')
const ListTypeFieldController = require('./listTypeField')

const router = Router()

router.use('/list-type', ListTypeController)
router.use('/list-type-field', ListTypeFieldController)
router.use('/list-content', ListContentController)

router.use('/', (req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = router