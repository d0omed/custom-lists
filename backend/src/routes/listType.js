const { Router } = require('express')
const { get } = require('../use-cases/listType')
const router = Router()

router.get('/', async (req, res, next) => {
  const { limit, offset } = req.body
  try {
    const result = await get({ limit, offset })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router