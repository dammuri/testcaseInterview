const mysql = require("mysql2/promise")


exports.query = async(sql, params) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'interviewtest',
            connectionTimeout: 60000
        })
        connection.connect()
        const [result,] = await connection.execute(sql, params)
        connection.end()
        return result
}
