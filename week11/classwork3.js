var files = ["pavans_first_birthday.mov",
"owens_asleep_at_the_computer.jpg",
"michael_fights_a_polar_bear.mp4",
"nate_road_rage.avi",
"ruby_skydiving.jpeg",
"ken_getting_his_black_belt.png",
"dan_winning_underground_street_race.mov",
"its_hard_to_come_up_with_file_names.gif",
"seriously_this_is_taking_too_long.mpg",
"i_wonder_how_many_of_these_i_should_have.png",
"probably_a_few_more.avi",
"nutmeg_is_clawing_my_sneakers_again.mp4",
"cat_i_will_destroy_you.gif",
"i_wish_we_had_a_dog.jpeg",
"stop_looking_at_me_like_that_nutmeg.mpeg",
"aww_i_cant_hate_you.png",
"omg_my_sneakers.avi",
"cat_you_are_the_worst.mp4"
];

var imageFiles = [];
var videoFiles = [];

for (i = 0; i < files.length; i++) {
	if (files[i].slice(-4) === ".jpg") {
		imageFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === ".gif") {
		imageFiles.push(files[i]);  
	}
	else if (files[i].slice(-4) === "jpeg") {
		imageFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === ".png") {
		imageFiles.push(files[i]);  
	}
	else if (files[i].slice(-4) === ".mov"){
		videoFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === ".avi"){
		videoFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === "mpeg"){
		videoFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === ".mp4"){
		videoFiles.push(files[i]);
	}
	else if (files[i].slice(-4) === ".mpg"){
		videoFiles.push(files[i]);
	}
}

console.log("Images: " + imageFiles);
console.log("Videos: " + videoFiles);

//check
if ((imageFiles.length + videoFiles.length) === files.length) {
	console.log(" ")
	console.log("complete.");
}
else {
	console.log("file(s) missing...");
	console.log(files);
}