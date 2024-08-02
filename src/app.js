const bodyParser = require('body-parser')
const express = require('express')
const bookRouter = require('./routes/booksRoute.js')
const memberRouter = require('./routes/membersRoute.js')
const bookingrouter = require('./routes/bookingRoute.js')
const swaggerjsdoc = require("swagger-jsdoc")
const swaggerui = require("swagger-ui-express")

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(bookRouter)
app.use(memberRouter)
app.use(bookingrouter)

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "Adam Muri Pamungkas Test API",
          version: "0.1.0",
          description:
            "This API docs for testing Purpose",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Adam Muri",
            url: "adam.com",
            email: "danmuria1@gmail.com",
          },
        },
        servers: [
          {
            url: "http://localhost:5000/",
          },
        ],
      },
      apis: ["./src/routes/*.js"],
};
const spacs = swaggerjsdoc(options)

app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs))
app.listen(5000, () => {
    console.log("listening")
})

module.exports = app