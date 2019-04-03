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
var letter;
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
    lettersPressedArr = [];
    l = lettersPressedArr.join('');
    $('#lettersPressed').text(l);

    $('#lettersPressed').text('Press a new letter');
    $('img').attr('src', 'Assets/Images/G8.jpg').fadeIn(1000);
  }
};
startGame();


$(window).keyup(function(event) {
    keyNum = event.keyCode;
    letter = String.fromCharCode(keyNum).toLowerCase();
  // debugger;
  

  for (i = 0; i < randomWord.length; i++) {

    res = randomWord.charAt(i);
    // console.log(res)
    if (res == letter) {

      //replace res in s
      replaceArr = s.split(' ');
      replaceArr[i] = res;
      s = replaceArr.join(' ');
      $('#randomWord').text(s);
      roundOver();
    } else if (res !== keyNum) {
      // 
      lettersPressedArr.push(letter);
      l = lettersPressedArr.join(' ');
      $('#lettersPressed').text(l);
      attemptsLeft--
    }
    
  }
  
  });

//finding remainin Letters
function roundOver() {
  var finishWord = randomWord.split('');
  if (finishWord.toString() == replaceArr.toString()){
    // alert('you win');
    winScore++
    $('#winScore').text(winScore);
    $('#winLose').show(1000).text(randomWord.toUpperCase()).css('transform', 'scale(2.0)');
    $('#winLose').css('color', 'red');
    $('#winLose').fadeOut(3000);

  if (attemptsLeft <= 0) {
    $('#winLose').text('YOU LOSE!!!');
    $('#winLose').hide(1500);
  }  
  
    //add pictures, does not work
    
    if (randomWord == game[0].toString()) {
      $('img').attr('src', 'Assets/Images/trump.jpg');
      $('img').hide(1000);
    }
    if (randomWord == game[1].toString()) {
      $('img').attr('src', 'Assets/Images/merkol.jpg');
      $('img').hide(1000);
    }
    if (randomWord == game[2].toString()) {
      $('img').attr('src', 'Assets/Images/putin.jpg');
      $('img').hide(1000);
    }
    
   startGame();
  } 
  
} 

}); 
  
   




