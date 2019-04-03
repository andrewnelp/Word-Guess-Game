$(function () {
// 1.Create and array to hold the presidents of big 8
var game = ['trump','merkel', 'putin'];
var s = "";
var attemptsLeft = 10;
var randomNum;
var randomWord;
var winScore = 0;
//Empty array to store the guesses
var answerArray = [];
var replaceArr = [];
var lettersPressedArr = [];
var l;
// var letter;
var keyNum;

function startGame() {
  randomNum = Math.floor(Math.random() * game.length);
  randomWord = game[randomNum];
  answerArray = [];
  console.log(randomWord);
  //the number of underscores matches the random Word 
  for (var i = 0; i < randomWord.length; i++) {
    //filling the answerArr with inderscores
    answerArray[i] = '_';
    //puting them in a string
    s = answerArray.join(' ');
    $('#randomWord').text(s);
    attemptsLeft = 10;
    $('#attemptsLeft').text(attemptsLeft);
    let lettersPressedArr = [];
    l = lettersPressedArr.join('');
    $('#lettersPressed').text(l);

    $('#lettersPressed').text('Press a new letter');
    // $('img').attr('src', 'Assets/Images/G8.jpg').show(1000);empty
  }
};
startGame();
// 

$(window).keyup(function(event) {
    keyNum = event.keyCode;
    let letter = String.fromCharCode(keyNum).toLowerCase();
  // debugger;
  

  for (let i = 0; i < randomWord.length; i++) {

    let res = randomWord.charAt(i);
    if ( letter == res) {
      //replace res in s
      replaceArr = s.split(' ');
      replaceArr[i] = res;
      s = replaceArr.join(' ');
      $('#randomWord').text(s);
      
    } 

    }

  if (!randomWord.includes(letter)) {
    // console.log(randomWord[i])

    lettersPressedArr.push(letter);
    let l = lettersPressedArr.join(' ');
    $('#lettersPressed').text(l);
    attemptsLeft--;
    $('#attemptsLeft').text(attemptsLeft);
    leftAttempts();
    
  }
  
  roundOver(); 
  });

//finding remainin Letters
function roundOver() {
  var finishWord = randomWord.split('');
  console.log(game[0])
  if (finishWord.toString() == replaceArr.toString()){
    winScore++
    $('#winLose').text('YOU WIN!!!');
    $('#winLose').animate({ opacity: 0.1, fontSize: 35 }, 400);
    $('#winLose').animate({ opacity: 1 }, 500).css('color', 'red');
    $('#winLose').fadeOut(1000);

    if (randomWord == game[0]) {
      $('img').attr('src', 'Assets/Images/trump.jpg');
      $('img').animate({ opacity: 0.1}, 400);
      $('img').animate({ opacity: 1 }, 500);
      $('img').fadeOut(1000);

    }
    if (randomWord == game[1]) {
      $('img').attr('src', 'Assets/Images/merkol.jpg');
      $('img').animate({ opacity: 0.1 }, 400);
      $('img').animate({ opacity: 1 }, 500);
      $('img').fadeOut(1000);
    }
    if (randomWord == game[2]) {
      $('img').attr('src', 'Assets/Images/putin.jpg');
      $('img').animate({ opacity: 0.1 }, 400);
      $('img').animate({ opacity: 1 }, 500);
      $('img').fadeOut(1000);
    }
    startGame();
  }
  
} 

function leftAttempts(){
  if (attemptsLeft < 1) {
    $('#winLose').text('YOU LOSE!!!');
    $('#winLose').animate({ opacity: 0.1, fontSize: 35}, 400);
    $('#winLose').animate({ opacity: 1}, 500).css('color', 'red');
    $('#winLose').fadeOut(1000);
    startGame();
  }
 
}

}); 
  
   




