//Import MySQL connection.
var connection = require('./connection');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "select * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, colToChange, colIndex, valOfIndex, cb) {
		var queryString = "UPDATE ";
		queryString += table + "SET ";
		queryString += colToChange;
		queryString += "= TRUE WHERE ";
		queryString += colIndex + " = ";
		queryString += valOfIndex;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}

			cb(result);
		});
	}
};
// Export orm for the model.
module.exports = orm;