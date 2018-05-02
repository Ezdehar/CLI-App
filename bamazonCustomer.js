var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Cardinal1",
	database: "bamazon"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

function loadProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Draw the table in the terminal using the response
    console.table(res);
    promptUser(res);
});
}

//const promise2 = promise.then(successCallback, failureCallback);
//var functionStart = functionStart();
function promptUser(inventory) {
	inquirer
		.prompt([
		{
	     type: "list",
	     name: "choice",
	     message: "What is the ID of the product you would like to buy?",
	     choices: ["1","2","3","4","5","6","7","8","9","10"]
	 	},
		{
		 type: "input",
	     name: "quantity",
	     message: "How many would you like?" 
		}
		])
		.then(function checkForUsersQuantity(product) { 
			var choiceId = parseInt(product.choice);
			var product = checkInventory(choiceId, inventory);  
	 		var quantity = parseInt(product.quantity);
	 			if (quantity > product.stock_quantity) {
	 				console.log("\nInsufficient quantity!");
	 				loadProducts();
	 	}
	 			else {
	 				loadProducts();
	 				makePurchase(product, quantity);
	 			}	
	});
}	
function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      // Let the user know the purchase was successful, re-run loadProducts
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      loadProducts();
    }
  );
}
function checkInventory(choiceId, inventory) {    	 									
for (var i = 0; i < inventory.length; i++) {
	if (inventory[i].item_id === choiceId) {
		return inventory[i];
		makePurchase(product, quantity);
		}
	}
	return null;
}


	     
		//},
// 		 	else if (quantity === product.stock_quantity) {
// 				function makePurchase(product, quantity, err, res) {
// 		 			//if (err) throw err;
// 		 			inquirer
// 		 			.prompt([
// 		 			{
// 		 			name: "command",
// 		 			type: "confirm",
// 		 			message: "Place order?",
// 		 			choices: ["YES", "NO"]
// 		 			},
// 		 		]).connection.query(
// 		 			"UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
// 		 			[quantity, product.item_id],	
// 		 				function(err,res) {
// 							//if (err) throw err;
// 		 					if (resp.command === "YES") {
// 		 						console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
// 		 						loadProducts();
// 		 					}
// 		 					else { (resp.command === "NO");
// 								var cancelOrder = cancelOrder(resp.command);
// 								cancelOrder();
// 		 					}
// 		 				})
// 					}
// 		 		}
// 		 	}
// 		 })