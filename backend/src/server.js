const express = require('express')
const sequelize = require('./database')
const cors = require('cors')
const routes = require('./routes')

sequelize.sync().then(() => console.log('DB is ready !'))

const app = express()

app.use(cors())
app.options('http://localhost:3001', cors())
app.use(express.json())

app.use(routes)

app.listen(3000)