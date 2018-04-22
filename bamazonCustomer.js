var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("Connected as id " +connection.threadId);

	start();
});

function start(err, results) {
	inquirer
		.prompt([
		{
	     type: "list",
	     name: "choice",
	     message: "What is the ID of the product you would like to buy?",
	     choices: ["1","2","3","4","5","6","7","8","9","10"]
		},
        {
	     name: "category",
	     type: "input",
	     message: "How many would you like to buy?"
	    },
	    {
	     name: "category",
	     type: "confirm",
	     message: "Place order?",
	     choices: ["YES", "NO"]
	    }
	])
	.then(function(answer) {
	 
	 connection.query("SELECT * FROM products", function(err, results) {
		
		  var choiceArray = ["1","2","3","4","5","6","7","8","9","10"];
	     		for (var i = 0; i < results.length; i++) {
	     			choiceArray.push(results[i].product);
	    		
		     if (results[i].product === answer.choice) {
           		 choiceArray = res[i];

		      		console.log(results[i].product);
		      }
			  else {
			  	cancelOrder();
			  		console.log("Insufficient quantity!");
			  }
			}
		})
	})
console.log(results);
connection.end();
}




	     	
	         















