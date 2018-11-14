var mysql = require("mysql");
var connection;

// Have to update this to allow for heroku stuff to work
console.log()
if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSBD_URL);
}
else{
	connection = mysql.createConnection({
		host: "localhost",
		port: "3306",
		user: "root",
		password: "",
		database: "burgers_db"
	});
}

connection.connect(function (err) {

	if(err){
		throw err;
	}

	console.log("Connection ID: " + connection.threadId)
});

module.exports = connection;

