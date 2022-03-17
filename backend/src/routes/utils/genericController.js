const { Router } = require('express')

module.exports = function ({getAll, getOne, add, remove, update}) {

  const router = Router()

  if (getAll) {
    router.get('/', async (req, res) => {
      const { limit, offset, name } = req.query
      try {
        const result = await getAll({ limit, offset, name })
        res.status(200).json(result)
      } catch (err) {
        res.status(500).json(err)
      }
    })
  }
      
  if (getOne) {
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
  }
    
  if (add) {
    router.post('/', async (req, res) => {
      try {
        const added = await add(req.body)
        res.status(201).json(added)
      } catch (err) {
        res.status(500).json(err)
      }
    })
  }
    
  if (update) {
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
  }
    
  if (remove) {
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
  }

  return router
}