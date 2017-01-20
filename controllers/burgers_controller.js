var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

//Create routes.
router.get("/", function(req, res) {
	res.redirect("/index");
};

router.get("/index", function(req, res) {
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
};

// router.post("/insertOne", function(req, res) {
// 	burgers.insertOne([
// 		"burger_name", "devoured"
// 		], [
// 		req.body.burgers_name, req.body.devoured
// 		], function() {
// 			res.redirect("/burgers");
// 	});
// });

router.put("/update/:id", function(req, res) {
	var condition = "id = " + req.pararams.id;
	// throw burgers.delete the id to know which burger to update.
	console.log("condition", condition);
	bugers.update({
		devoured: true
	}, condition, function() {
		res.redirect('/burgers');
	});
});

// export to server.js
module.exports = router;