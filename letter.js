
/*
Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank 
placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

- A string value to store the underlying character for the letter
- A boolean value that stores whether that letter has been guessed yet
- A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter 
has not been guessed
- A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value 
to true if it was guessed correctly
*/
var prompt = require("prompt")

prompt.start();                                             // Start Prompt

function Letter(character, trueFalse) {
    this.character = character;                     // letter guessed
    this.trueFalse = trueFalse;                     // boolean - has the letter been guessed?
    this.holder = function(){
        if (trueFalse === true) {
           // console.log the correct letter
        } else {
            // console.log the placeholder
        }
        
    }
    this.yayNay = function() {
        
        // takes character as an argument and checks it against the underlying character, updates boolean value to TRUE if guessed correctly
    }
}



 
// 
// Get two properties from the user: username and email 
// 
/*
prompt.get(['username', 'email'], function (err, result) {  // What to Prompt for
  // 
  // Log the results. 
  // 
  console.log('Command-line input received:');              // console.log this
  console.log('  username: ' + result.username);            // console.log this
  console.log('  email: ' + result.email);                  // console.log this
});

*/






