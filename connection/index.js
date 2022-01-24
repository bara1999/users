var mysql = require('mysql2/promise');

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "exchanges",
});

module.exports = con;