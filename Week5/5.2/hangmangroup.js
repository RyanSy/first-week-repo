$( document ).ready(function() {


var multiLetter = [];

function generateWord() {

var wordList = ["hello", "inverted", "amazing", "beautiful", "george"];

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

return randomWord;
}

ourWord = generateWord();

 for (var i = 0; i < ourWord.length; i++) {
        $(".game").append("_");
        multiLetter[i] = "_";
    }

    $(".game").html(multiLetter);
var letterGuessed;
    
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  	$('#abc').append(letterGuessed);
  //insert letterGuessed into a display div //


    }

function checkGuess(letterGuessed) {
  for (i=0; i<multiLetter.length;i++) { 
    if (letterGuessed == multiLetter[i]) {
      multiLetter[i]=letterGuessed;
      $(".game").html(multiLetter);
    }
  }
};
checkGuess();
});
    

 