var dog = {
	sleepy: false,
	noise: "woof",
	makeNoise: function(){
		if (dog.sleepy == "false") {
			console.log(dog.noise);
		}
	},
}

var cat = {
	sleepy: true,
	noise: "meow",
	makeNoise: function(){
		if (!this.sleepy == "true") {
			console.log(this.noise);
		}
	},
}

dog.makeNoise();

//or

function Animal(sleepy, noise){
	this.sleepy = sleepy;
	this.noise = noise;
	this.makeNoise = function () {
		if (this.sleepy === false) {
			console.log (this.noise);
		}
	}
}