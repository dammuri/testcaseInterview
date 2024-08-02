const db = require('../database.js')
const Sequelize = require('sequelize')

const Books = db.define("books", {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    code: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING,
        allowNull: true
    },
    stock: {
        type: Sequelize.INTEGER,
        allownull: false
    },
}, {
    freezeTablename: true
}
)

module.exports = Books