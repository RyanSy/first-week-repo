$(document).ready(function() {
        var count = 0;

        var positions = ['character', 'enemies', 'defender']



        var characters = {
            'obi-wan-kenobi': {
                name: "obi-wan-kenobi",
                biggerImg: "assets/images/obi-wan.jpg",
                buttonImg: "assets/images/obi-wan.jpg"
            },
            'luke-skywalker': {
                name: "luke-skywalker",
                biggerImg: "assets/images/luke-skywalker.jpg",
                buttonImg: "assets/images/luke-skywalker.jpg"
            },
            'darth-sidious': {
                name: "darth-sidious",
                biggerImg: "assets/images/darth-sidious.png",
                buttonImg: "assets/images/darth-sidious.png"
            },
            'darth-maul': {
                name: "darth-maul",
                biggerImg: "assets/images/darth-maul.jpg",
                buttonImg: "assets/images/darth-maul.jpg"
            },
        };

        var chars = Object.keys(characters);


        for (var key in characters) {

        var buttonTag = $('<button>');
        buttonTag.addClass('charButton');
        buttonTag.attr('data-char', key);

        var nameModified = key.split('_').join(' '); //replace underscores with spaces
        buttonTag.text(nameModified);

        $('#container').append(buttonTag);
    }


        // Create the "render" function that will take in: character, renderArea, size, buttonId as inputs
        var render = function(character, renderArea, size, buttonId) {
            // Create a if statment that will check the input size
            // If size is equal to 'buttonImg' we will be creating button sized image divs
            if (size == 'buttonImg') {
                // Create the variable "charDiv", use jQuery to create the div with character name as the data-name
                var charDiv = $('<div>');
                charDiv.attr('data-name', character.name);
                // Create the variable "charImage", jQuery to create the div that will contain the image, with the class 'buttons' and the id as "button Id"
                var charImage = $("<img alt='image' class='buttons' data-name=" + buttonId + ">")
                    // Source the character's 'buttonImg'
                charImage.attr("src", character.buttonImg);
                // Append the "charImage" to "charDiv"
                charDiv.append(charImage);
                // Append the "charDiv" to the "renderArea"
                $("#" + renderArea).append(charDiv);
            } else {
                // Else we are creating bigger sized image divs
                // Create the variable "charDiv", use jQuery to create the div with character name + "-big" as the data-name
                var charDiv = $('<div>');
                charDiv.attr('data-name', character.name + "-big'>");
                // Create the variable "charImage", jQuery to create the div that will contain the image, with the class 'char'
                var charImage = $("<img alt='image' class='char'>");
                // Source the character's 'biggerImg'
                charImage.attr("src", character.biggerImg);
                // Append the "charImage" to "charDiv"
                charDiv.append(charImage);
                // Append the "charDiv" to the "renderArea"
                $("." + renderArea).append(charDiv);
            };
        };
        //Step 1: Create a variable named count and set it equal to 0. This will keep track of how many divs are created 
        var count = 0;
        //Step 2: Create a variable named characterNames and set it equal to an array with the following strings: 'blanka', 'chunli', 'dhalsim', 'ehonda', 'guile', 'ken', 'ryu', 'zangie'. This let's us store all of the character names as Strings
        var characterNames = ['obi-wan-kenobi', 'luke-skywalker', 'darth-sidious', 'darth-maul'];
        //Step 3: Create a variable named  array "sides" that contains: 'left-side' and 'right-side'
        var sides = ['left-side', 'right-side'];
        //Step 4: Create an array named positions that contains: 'button-area-top', 'button-area-bot'
        var positions = ['button-area-top', 'button-area-bot'];
        for (var p = 0; p < positions.length; p++) {
            var start;
            var end;
            //Step 5: 
            /*
                * do an if statement and check if p is equal to 0
                  if so then set variable start to 0 and variable end to 4
                  else then set variable start to 4 and variable end to 8 
            */
            if (p == 0) {
                start = 0;
                end = 4;
            } else {
                start = 4;
                end = 8;
            }
            for (var i = start; i < end; i++) {
                // Step 6:
                  /*
                    * Create a variable named target and set it to characterNames with an index of i
                    * Call the render function and pass these in as the arguments: characters[target, positions[p], buttonImg, characterNames[i]
                  */
                var target = characterNames[i];
                render(characters[target], positions[p], 'buttonImg', characterNames[i]);
            };
        };
        $('.buttons').on('click', function() {
            //Step 7 
              /*
                * Create a variable named name and set it equal to value of what was clicked on's data-name value.
                * If count is less than 2 
                  * then call the render function and pass in these arguments: characters[name], sides[count], 'biggerImg', name
                  * increment count by 1
              */
            var name = $(this).attr('data-name');
            if (count < 2) {
                render(characters[name], sides[count], 'biggerImg', name);
                count++;
            };
        });
    });