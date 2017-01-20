// import orm

var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("cats", function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb) {
		orm.update('cats', objColVals, condition, cb, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;