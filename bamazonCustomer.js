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

function start(err, res) {
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
	]).then(function(resp) {
	 	var query = connection.query(
	 		"SELECT * FROM products",
	 		function(err, res){
	 		if(err) throw err;	
	 		var listOfProducts = []
	 		for(var i = 0; i < res.length; i++) {
	 			console.log(res[i].id + ": " + res[i].productName);
				console.log(res[i].description);
				listOfItems.push(res[i].productName);
			}
	 		inquirer.prompt([
				{
					name: "price",
					message: "price",
					choices: listOfItems
				}
	 	]).then(ans => {
	 		var cancelOrder = cancelOrder(resp.choice);
	 		var CostofPurchase = CostOfPurchase(resp.choice);
	 		if (answer.chioce === res[i].productName) {
	 			postCostOfPurchase(resp.choice)
	 			console.log(price)
	 			console.log(res[i].products);
	 		}else {
			   	cancelOrder();
			  	console.log("Insufficient quantity!");	
			   	}
	 	});	
console.log(res);
connection.end();
	})
});
}
//"1","2","3","4","5","6","7","8","9","10"

// //new Promise(function(resolve) {
//   console.log('first');
//   resolve();
//   console.log('second');
// }).then(function() {
	//.then is the value called by console.resolve (the third line)
//   console.log('third');
// });

//Call var before declaring in the constructor function 
//Familiar with how to hit api keys and how to take environment variables  defined and use them in my scripts
	     	
	         
//choiceArray.push(res[i].answer);

	    //		}














