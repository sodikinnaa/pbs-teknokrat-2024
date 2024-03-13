const mysql = require('mysql')

const db = mysql.createConnection   ({
    host:'localhost',
    user:'root',
    password:'',
    database:'dabase_beasiswa'
})

module.exports = db