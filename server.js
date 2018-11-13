var express = require("express");
var PORT = process.env.PORT || 8080;

var app = express();

// allows all static files to be loaded and used by the server.
app.use(express.static("public"));
// builds the req.body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphd = require("express-handlebars");

app.engine("handlebars", exphd({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerRoutes");

app.use(routes);

app.listen(PORT, function(){
    console.log("You are on port: " + PORT);
});