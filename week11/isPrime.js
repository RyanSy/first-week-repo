//take in one number, is it divisible by anything other than itself and 1
//if so return false
//if not return true
var prompt = require("prompt");
prompt.start();

function isPrime(num){

	return true;

}

prompt.get(["number"], function(err, result) {
	//
	// Log the results.
	//
	console.log("Command-line input received.");
	console.log("  number: " + isPrime(result.number));

	var output = "The number " + result.number + " was " + isPrime(result.number) + " prime";

	console.log(output);
});