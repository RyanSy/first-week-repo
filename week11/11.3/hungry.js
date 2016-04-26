// var prompt = require('prompt');

// prompt.start();

// var Life = function (hungry) {
//     this.hungry = hungry,
//     this.keepPromptingUser == function() {
//         if(this.hungry == 'yes'){ //changed while to if
//             prompt.get(['hungry'], function(err, result) {    
//                 this.hungry = result.hungry; 
//                 if (result.hungry == 'yes') {
//                     console.log("Here's some Pad See Ew!");
//                     life.keepPromptingUser(); //change this to life
//                 }
//                 else {
//                     console.log("Take a nap. You had a big meal.");
//                 }
//             });
//         }
//     }
//     keepPromptingUser();
// }

var prompt = require('prompt');

prompt.start();

var life = {
    hungry: 'yes',
    keepPromptingUser : function() {
        prompt.get(['hungry'], function(err, result) {
            life.hungry = result.hungry;
            if (life.hungry == 'yes'){
                console.log("Here's some Pad See Ew!")
                life.keepPromptingUser();
            }else{
                console.log("Take a nap. You had a big meal.");
            }
        });
    }

}

life.keepPromptingUser();