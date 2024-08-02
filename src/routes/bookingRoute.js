const express = require('express')
const bookingController = require('../controllers/bookingController.js')

const route = express.Router()

/**
 * @swagger
 *  components:
 *      schema:
 *          bookingGet:
 *              type: object
 *              properties:
 *                  codeBook:
 *                      type: string
 *                  codeName:
 *                      type: string
 *                  Status:
 *                      type: string
 *                  StartDate:
 *                      type: string
 *                      format: date
 *                  endDate:
 *                      type: string
 *                      format: date
 *          bookingPost:
 *              type: object
 *              properties:
 *                  codeBook:
 *                      type: string
 *                  codeName:
 *                      type: string
 *                  quantity:
 *                      type: integer
 *          bookingPut:
 *              type: object
 *              properties:
 *                  codeBook:
 *                      type: string
 *                  codeName:
 *                      type: string
 *                  endDate:
 *                      type: string
 *                      format: date
 *                  
 */

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: booking books management
 * /booking:
 *   get:
 *     summary: get all book that borrowed and returned
 *     tags: [Booking]
 *     description : all booking list detail
 *     responses:
 *       200:
 *         description: all booking list
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/bookingGet'
 *       
 *   post:
 *     summary: booking books here
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#components/schema/bookingPost'
 *     responses:
 *       200:
 *         description: Created booking book.
 *         content:
 *           application/json:
 *              schema:
 *                  $ref: '#components/schema/bookingPost'
 *       500:
 *         description: Internal Server Error
 * 
 *   put:
 *      summary: return book API
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/bookingPut'
 *      responses:
 *          200:
 *              description: book returned
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schema/bookingPut'
 *          500:
 *              description: error occured
 *
 */


route.get('/booking', bookingController.getAllBooking)
route.post('/booking', bookingController.postBooking)
route.put('/booking', bookingController.returnBooking)

module.exports = route