const express = require('express')
const booksController = require('../controllers/booksController.js')

const route = express.Router()

/**
 * @swagger
 *  components:
 *      schema:
 *          Book:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  code:
 *                      type: string
 *                  author:
 *                      type: string
 *                  stock:
 *                      type: integer
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   get:
 *     summary: list all books available
 *     tags: [Books]
 *     description : all book here are available to book
 *     responses:
 *       200:
 *         description: list all available books
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/Book'
 *       
 *   post:
 *     summary: adding new books to library
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#components/schema/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *              schema:
 *                  $ref: '#components/schema/Book'
 *       500:
 *         description: Internal Server Error
 *
 */

route.get('/books', booksController.getAllBooks)
route.post('/books', booksController.postBook)
module.exports = route