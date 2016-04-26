var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1111',
  database: 'bears_db'
});


connection.connect(function(err) {

  // if (err) {
  //   console.error('error connecting: ' + err);
  //   return;
  // }

  // connection.query("SELECT * FROM happy_bears", function(err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   var hbName="Baloo";
  //   var hbFood = "wasps";
  //   var hbper = "happy";

  //   var stuffToInsert = {name: 'Pooh', favorite_food: 'honey', personality: 'medicated'};
  //   console.log(stuffToInsert);

  //   var query = connection.query('INSERT INTO happy_bears SET ? ', stuffToInsert, function(err, result) {
  //     if(err){
  //       console.log("Problem", err);
  //     }
  //   });
  // });



var deleteFirstBear = function() {
  var query = connection.query('DELETE FROM happy_bears LIMIT 1;', function(err, result) {
      if(err){
        console.log("Problem", err);
      }
  });   
}

deleteFirstBear();

});