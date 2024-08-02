const express = require('express')
const membersController = require('../controllers/membersControllers.js')

const route = express.Router()

/**
 * @swagger
 *  components:
 *      schema:
 *          MemberGet:
 *              type: object
 *              properties:
 *                  code:
 *                      type: string
 *                  name:
 *                      type: string
 *                  number_Borrowed:
 *                      type: integer
 *          MemberPost:
 *              type: object
 *              properties:
 *                  code:
 *                      type: string
 *                  name:
 *                      type: string            
 */

/**
 * @swagger
 * tags:
 *   name: Member
 *   description: Member Management API
 * /members:
 *   get:
 *     summary: list all members
 *     tags: [Member]
 *     description : all members list and book borrowed
 *     responses:
 *       200:
 *         description: list all member and book borrowed
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/MemberGet'
 *       
 *   post:
 *     summary: add Members
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#components/schema/MemberPost'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *              schema:
 *                  $ref: '#components/schema/MemberPost'
 *       500:
 *         description: Internal Server Error
 * 
 *
 */


route.get('/members', membersController.getAllMembers)
route.post('/members', membersController.postMember)

module.exports = route