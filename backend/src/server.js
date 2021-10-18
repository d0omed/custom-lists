const express = require('express')
const sequelize = require('./database')
const routes = require('./routes')

sequelize.sync().then(() => console.log('DB is ready !'))

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000)