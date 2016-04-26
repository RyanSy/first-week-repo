var prompt = require("prompt");

var Dud = function(gender, dudName, coolnessScale){
	this.gender = gender
	this.dudName = dudName;
	this.coolnessScale = coolnessScale;
	this.dudeOrDudess = function(){
		if (this.gender == 'female'){
			console.log("I'm a dudess. Sup?");
		}else{
			console.log("I'm a dude. Are there any dudesses around?");
		}
	}
}

prompt.start();

prompt.get(["gender", "name", "coolnessScale"], function (err, result) {
		var newDud = new Dud(result.gender, result.name, result.coolnessScale);
		console.log(newDud);
	});

module.exports = Dud;