var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

var burger = require('./models/burger.js');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// import routes from burger controller
var routes = require('./controllers/burgers_controller.js');
// have the app use the routes provided.
app.use('/', routes);

// app.get("/", function(req, res) {
// 	connection.query("SELECT * FROM burgers;", function(err, data) {
// 		if(err) {
// 			throw err;
// 		}
// 		res.render("index", {burger: data})
// 	});
// });

// app.put("/update", function(req, res) {
// 	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", req.body.id,
// 		function(err, result) {
// 			if(err) {
// 				throw err;
// 			}
// 			res.redirect('/');
// 	});
// });

// app.post("/create", function(req, res) {
// 	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.name],
// 		function(err, result) {
// 			if(err) {
// 				throw err;
// 			}
// 			console.log(req.body)
// 			res.redirect('/');
// 		});
// });

app.listen(PORT);