const mysql = require("mysql2")
const { createPool } = require("mysql2/promise")

const pool = createPool({
    host: "localhost",
    user: 'root',      
    password: 'senai',    
    database:'mini_cia_e_trilhas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool