var express = require("express");

var router = express.Router();
// require the model
var burgers = require("./../models/burger.js");

//Create routes.
router.get("/", function(req, res) {
	res.redirect("/index");
});

router.get("/index", function(req, res) {
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		// console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/create", function(req, res) {
	burgers.insertOne([
		"burger_name"], [
		req.body.name], function() {
			res.redirect("/index");
	});
});

router.put("/update/:id", function(req, res) {
	// console.log(req.params);
	var condition = "id = " + req.params.id;
	// throw burgers.delete the id to know which burger to update.
	console.log("condition", condition);
	burgers.updateOne({
		devoured: true
	}, condition, function() {
		res.redirect('/index');
	});
});

// export to server.js
module.exports = router;

