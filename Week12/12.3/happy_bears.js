var mysql = require('mysql');
var prompt = require('prompt');
prompt.start();

var connection = mysql.createConnection({
	host : 'localhost', // 127.0.0.1
	user : 'root',
	password : '1111',
	database: 'bears_db'
});

connection.connect(function(err){
	if (err) {
		console.error('error connecting');
		return;
	}
	
	console.log('connected as id ' + connection.threadID);

	prompt.get(['city','hipsters','country_id'], function (err, result){
		var post = {city: '', hipsters: '', country_id:1};
		var query = connection.query('INSERT INTO posts SET?', post, function(err,result){
		});	
	});
});

connection.query("SELECT * FROM happy_bears;", function (err, res) {
	if (err) throw err;
	console.log(res);
});