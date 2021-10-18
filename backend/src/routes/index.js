const { Router } = require('express')
const ListTypeController = require('./listType')

const router = Router()

router.use('/list-type', ListTypeController)

router.use('/', (req, res) => {
  res.status = 404
  res.json({ message: 'Not found' })
})

module.exports = router