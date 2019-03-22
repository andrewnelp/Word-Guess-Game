
// 1.Create and array to hold the presidents of big 8
var game = ['trump','merkel', 'putin'];
var s;
var count = 0;//for letters guessed checking
var attemptsLeft = 11;

var randomNum = Math.floor(Math.random() * game.length);
var randomWord = game[randomNum];
var remainingLetters = randomWord.length;
//var win = randomWord;
var winScore = 0;
//Empty array to store the guesses
var answerArray = [];
//var lettersGuessedArr = [];
//var l;
var output = '';


   document.addEventListener("keyup", function (event) {
    
    //filling the answerArr with inderscores
//the number of underscores matches the random Word 
    for (var i = 0; i < randomWord.length; i++) {
      answerArray[i] = '_ ';
    }
    //puting them in a string
    s = answerArray.join(' ');
    document.getElementById('randomWord').innerHTML = s;
   });

  
     document.addEventListener("keyup", function() {
      //here we get the letter that the user typed in the box
       var keyNum = event.keyCode;
       var letter = String.fromCharCode(keyNum).toLowerCase();
       console.log(letter);
       //making sure there is a guess and letters lower case used
       if (event.keyCode >= 97 && event.keyCode <= 122) {
        // if the randomWord contains a letter that user typed in
        for (var i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === letter) {
            // assigning this letter 
            answerArray[i] = letter;
          }
          
      }
        remainingLetters--;
        var output = output + letter + ' ';
        document.querySelector('#randomWord').innerHTML = output;
        console.log(remainingLetters);
         
     }
     
        attemptsLeft--;
        document.getElementById('attemptsLeft').innerHTML = attemptsLeft;
       
     });
  

// //when user guesed the word;
// if (remainingLetters = 0) {
//   alert('You Win! ' + "The Leader Name is " + s.toUpperCase);
//   answerArray[j].classList.add('winScore');
//   winScore++;
//   document.querySelector('#winScore').innerHTML = winScore;
//   winScore.classList.add('winScore');

//   break;
// }

// letter.length > 0 &&