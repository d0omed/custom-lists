const { Router } = require('express')
const { getAll, getOne, add, remove, update } = require('../use-cases/listType')
const router = Router()

router.get('/', async (req, res) => {
  const { limit, offset, name } = req.query
  try {
    const result = await getAll({ limit, offset, name })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await getOne(id)
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({ message: 'Not found.' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const added = await add(req.body)
    res.status(201).json(added)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [count, rows] = await update({ id, listType: req.body })
    res.status(200).json({ count, rows })
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).json({ message: 'Not found.' })
      return
    }
    res.status(500).json(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const count = await remove(id)
    res.status(200).json({ count })
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).json({ message: 'Not found.' })
      return
    }
    res.status(500).json(err)
  }
})

module.exports = router