const db = require('../database.js')
const Sequelize = require('sequelize')

/**
 * @swagger
 * components:
 *    schemas:
 *      Book:
 *        type: object
 *        required:
 *          - title
 *          - author
 *          - code
 *        properties:
 *           id:
 *             type: string
 *             description: the auto-genrated id of the book
 *           title:
 *             type: string
 *             description: the book title
 *           author:
 *              type: string
 *              description: the book author
 *           example:
 *              id: 1
 *              title: the book news
 *              author : JK rowling
 * 
 */


const Booking = db.define('booking', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    codeBook: {
        type: Sequelize.STRING
    },
    codeName: {
        type : Sequelize.STRING
    },
    quantity : {
        type: Sequelize.INTEGER
    },
    Status: {
        type: Sequelize.STRING
    },
    StartDate: {
        type: Sequelize.DATEONLY
    },
    endDate: {
        type: Sequelize.DATEONLY
    }
},{freezeTablename: true}
)

module.exports = Booking