var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon"
});
connection.connect(function(err) {
	if(err) throw err;
	console.log("Connected as id " +connection.threadId);

	start();
});

function start(err, res){
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
	]).then(resp => {
 		var query = connection.query(
 		 	"SELECT choice FROM products WHERE itemId?",
 		 	{
 		 		itemId: product
 		 	},
 		 	function checkForProduct(product) {
 		 		//if(err) throw err;
 		 		if (resp.command === "YES"){
 		 		var listOfchoices = []
		 		for(var i = 0; i < resp.length; i++) {
			 		console.log(resp[i].id + ": " + resp[i].product_name);
					//console.log(resp[i].description);
					listOfProduct.push(res[i].product_name);			
			  	}
			  	inquirer.prompt([
			  	{
			     name: "command",
			     type: "confirm",
			     message: "Place order?",
			     choices: ["YES", "NO"]
			    }	
			]).then(ans => {
					var CostofPurchase = CostOfPurchase(resp.choice); 
					if (answer.chioce === res[i].product_name){
		 				postCostOfPurchase(resp.choice);
		 				console.log(res[i].products);
		 				console.log("The total price is");
			 		} else if (resp.command !== res[i].product_name) {
			  		cancelOrder();
			  			var cancelOrder = cancelOrder(resp.choice);
			  			console.log("Insufficient quantity!");
			  		}
			});
			promptUser();
		};	  		
	});
});
console.log(resp);
}
connection.end();	
				














