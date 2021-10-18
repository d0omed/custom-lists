const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lists', 'user', null, {
    dialect: 'sqlite',
    host: './database.sqlite'
})

module.exports = sequelize