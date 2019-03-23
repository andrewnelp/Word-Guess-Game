
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
var at;


   document.addEventListener("keyup", function (event) {
    
    //filling the answerArr with inderscores
//the number of underscores matches the random Word 
    for (var i = 0; i < randomWord.length; i++) {
      answerArray[i] = '_ ';
      
    }
    //puting them in a string
     s = answerArray.join(' ');
    document.getElementById('randomWord').innerHTML = s;
    //need to set a default picture at the right by setAtrribute
   });

  
     document.addEventListener("keyup", function() {
      //here we get the letter that the user typed in the box
       var keyNum = event.keyCode;
       //making sure there is a guess and letters lower case used
       var letter = String.fromCharCode(keyNum).toLowerCase();
       console.log(letter);
       
        // if the randomWord contains a letter that user typed in
        for (var i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === letter) {
            // assigning this letter 
            //the problem is that it shows the letter but not previous letters guessed;
            answerArray[i] = letter;
            document.querySelector('#randomWord').innerHTML = answerArray.join(' ');
            
            
             
            // when the word is guessed - does not work!!! shows remaining letters = 0 immediatelly;
            if(remainingLetters = 0) {
              alert("you win!");
              //adding a winscore +1 when the word is guessed fully
              return;
              //need to add also a new picture setAttribute;
            }
            winScore++;
            document.getElementById('winScore').innerHTML = winScore;
            
          }
      } 
      //remaining letters do not show correctly and when 0 the program do not stop
       remainingLetters--;
       console.log(remainingLetters);
       attemptsLeft--;
       document.getElementById('attemptsLeft').innerHTML = at;
    });
   
// function to stop a program when remaining guesses = 0. How to call this function?
// function attemptsLefts() {
//   if (attemptsLeft = 0) {
//     alert('You Lost!');
//     return;
//   }



