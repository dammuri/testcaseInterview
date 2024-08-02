const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    {
    database : "interviewtest",
    host : "localhost",
    username : "root",
    passowrd : "",
    dialect : "mysql"
}
)

module.exports = sequelize