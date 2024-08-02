const db = require('../database.js')
const Sequelize = require('sequelize')

const Members = db.define("members", {
    id:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING
    },
    status : {
        type: Sequelize.STRING
    }
})

module.exports = Members
