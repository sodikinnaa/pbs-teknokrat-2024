const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6695515",
  database: "sql6695515",
  password: "KfvpfyPLZZ",
});

module.exports = db;
