const mysql = require("mysql2")
const { createPool } = require("mysql2/promise")
require("dotenv").config()

const pool = createPool({
    host: "localhost",
    user: 'root',      
    password: process.env.SENHA_DB,    
    database: 'mini_cia_e_trilhas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool