var prompt = require("prompt");
var request = require("request");
var fs = require("fs");

prompt.start();

prompt.get(["enter your name: "], function (err, result) {
	request("https://www.google.com/search?q="+result, function (err, response, body){
		console.log(result);
		fs.writeFile("googlename.html", body)
		});
	});