const fs = require('fs')
const path = require('path')
const { Router } = require('express')

const router = Router()

const routes = fs.readdirSync(__dirname)
  .filter(filename => filename !== 'index.js' && path.extname(filename) === '.js')
  .map(filename => ({name: `/${filename.split('.js')[0]}`, routes: require(path.resolve(__dirname, filename))}))

routes.forEach(({name, routes}) => {
  router.use(name, routes)
})

router.use('/', (req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = router