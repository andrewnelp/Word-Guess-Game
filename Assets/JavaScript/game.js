
// 1.Create and array to hold the presidents of big 8
var game = ['putin', 'trump','merkel'];

var s;
var count = 0;
var attemptsLeft = 10 - count;

//Empty array to store the guesses
var answerArray = [];


//picking a random word from an array with keydown function
function runGame(event) {
  if (event.keyCode === 13) {
    var randomWord = game[Math.floor(Math.random() * game.length)]; 
    console.log(randomWord);
    //filling the answerArr with inderscores
//the number of underscores matches the random Word 
    for (var i = 0; i < randomWord.length; i++) {
      answerArray[i] = '_ ';
    }
    //puting them in a string
    s = answerArray.join('');
    document.getElementById('currentWord').innerHTML = s;
   }
  }
  



// function Letter() {
//   //here we get the letter that the user typed in the box
//   var letter = document.getElementById('letter').value;

//   if (letter.length > 0) {
//     //if the randomWord contains a leeter that user typed in
//     for (var j=0; j < randomWord.length; j++) {
//       if (randomWord[j] === letter) {
//         // assigning this letter 
//         answerArray[j] = letter;
//       }
//     }
//     //how many times it takes to guess
//     count++
//     document.getElementById('counter').innerHTML = "No of clicks: " + count;
//     document.getElementById('numberGuesses').innerHTML = attemptsLeft;
//   }
// }




