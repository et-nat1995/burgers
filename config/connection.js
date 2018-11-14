var mysql = require("mysql");
var connection;

// Have to update this to allow for heroku stuff to work
console.log()
if(process.env.NODE_ENV === "production"){
	connection = mysql.createConnection({
		host: "sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		port: "3306",
		user: "facxqg7z5plho4gd",
		password: "gjqhnn15vbxn9tsx",
		database: "tprzqdresan11zdj"
	});
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

