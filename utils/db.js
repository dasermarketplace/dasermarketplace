var mysql = require('mysql');
var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '@dmin#321'
				});

connection.query('USE dasernet');	

module.exports = connection;



