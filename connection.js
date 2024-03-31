const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6695511",
  database: "sql6695511",
  password: "Naj8NV1HXi",
});

module.exports = db;
