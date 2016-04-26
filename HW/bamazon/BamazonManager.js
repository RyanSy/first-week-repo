var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "1111",
	database: "bamazon"
});

connection.connect(function(err){
	if (err) {
		console.error("error connecting");
		return;
	}
	console.log("connected as Bamazon Manager");
	console.log("");
	console.log("1) View Products for Sale");
	console.log("2) View Low Inventory");
	console.log("3) Add to Inventory ");
	console.log("4) Add New Product");
	console.log("");

	var schema = {
	    properties: {
	      option: {
	      	description: "Please select an option:",
	      	type: "integer",
	        message: "Please type the number of the option you wish to select.",
	        required: true
	      }
	    }
	};

	prompt.message = "";
	prompt.delimiter= "";
	prompt.start();
	prompt.get(schema,function (err, result) {
		if (result.option === 1) {
			connection.query("SELECT * FROM Products;", function (err, res) {
				if (err) throw err;
				console.log("Products for Sale:");
				console.log("");
				for (i=0; i<res.length; i++) {
					console.log("Item ID: " + res[i].ItemID);
					console.log("Product Name: " + res[i].ProductName);
					console.log("Price (USD): $" + res[i].Price);
					console.log("Stock Quantity: " + res[i].StockQuantity);
					console.log("");
				}
			});
		}
		else if (result.option === 2) {
			connection.query("SELECT * FROM Products WHERE StockQuantity<5;", function (err, res) {
				if (err) throw err;
				console.log("Low Inventory:");
				console.log("");
				for (i=0; i<res.length; i++) {
					console.log("Item ID: " + res[i].ItemID);
					console.log("Product Name: " + res[i].ProductName);
					console.log("Price (USD): $" + res[i].Price);
					console.log("Stock Quantity: " + res[i].StockQuantity);
					console.log("");
				}
			});
		}
		else if (result.option === 3) {
			console.log("Add Inventory:");
			var schema2 = {
	    		properties: {
	      			itemID: {
		      			description: "Please enter the ItemID of the product:",
		      			type: "integer",
		        		message: "Please enter the ItemID of the product.",
		        		required: true
	      			},
	      			quantity: {
	      				description: "Please enter the quantity you wish to add:",
	      				type: "integer",
	        			message: "Please enter the quantity you wish to add.",
	        			required: true
	      			}
	    		}
			};
			prompt.message = "";
			prompt.delimiter= "";
			prompt.start();
			prompt.get(schema2, function (err, result) {
				var idSelection = result.itemID - 1;
				var id = result.itemID;
				connection.query("UPDATE Products SET StockQuantity=(StockQuantity + "+result.quantity+") WHERE ItemID="+id, function (err, res) {
					if (err) throw err;
				});
				connection.query("SELECT * FROM Products WHERE ItemID="+id, function (err,res) {
					console.log("You have added " + result.quantity + " copy(ies) of " + res[idSelection].ProductName);
					console.log("");
					console.log("Product Details:");
					console.log("");
					console.log("Item ID: " + res[idSelection].ItemID);
					console.log("Product Name: " + res[idSelection].ProductName);
					console.log("Price (USD): $" + res[idSelection].Price);
					console.log("Stock Quantity: " + res[idSelection].StockQuantity);
				});
			});
		}
		else if (result.option === 4) {
			console.log("Add New Product:");
			var schema3 = {
	    		properties: {
	      			productName: {
		      			description: "Please enter the product name:",
		      			type: "String",
		        		message: "Please enter the product name.",
		        		required: true
	      			},
	      			departmentName: {
		      			description: "Please enter the department name:",
		      			type: "String",
		        		message: "Please enter the department name.",
		        		required: true
	      			},
	      			price: {
	      				description: "Please enter the product price:",
	      				type: "integer",
	        			message: "Please enter the product price.",
	        			required: true
	      			},
	      			stockQuantity: {
	      				description: "Please enter the product quantity in stock:",
	      				type: "integer",
	        			message: "Please enter the product quantity in stock.",
	        			required: true
	      			}
	    		}
			};
			prompt.message = "";
			prompt.delimiter= "";
			prompt.start();
			prompt.get(schema3, function (err, result) {
				connection.query("INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)VALUES ('"+result.productName+"','"+result.departmentName+"',"+result.price+","+result.stockQuantity+");", function (err, result) {
					console.log("Product Added!");
				});
				connection.query("SELECT * FROM Products", function (err, result) {
					console.log(result);
				});

			});
		}

	

	}); //closes prompt.get
}); //closes connection.connect
