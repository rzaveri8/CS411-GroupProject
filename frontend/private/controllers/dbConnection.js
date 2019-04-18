const mysql = require('mysql');
const credentials = require('./credentials');

var connection = mysql.createConnection({
    host: credentials.database.host,
    user: credentials.database.user,
    password: credentials.database.password,
    database: credentials.database.database
});

connection.connect();

module.exports = connection;