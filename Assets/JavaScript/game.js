$(function () {
// 1.Create and array to hold the presidents of big 8
var game = ['trump','merkol', 'putin'];
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

function startGame() {
  randomNum = Math.floor(Math.random() * game.length);
  randomWord = game[randomNum];
  console.log(randomWord);
  //the number of underscores matches the random Word 
  for (var i = 0; i < randomWord.length; i++) {
    //filling the answerArr with inderscores
    answerArray[i] = '_';
    //puting them in a string
    s = answerArray.join(' ');
    $('#randomWord').text(s);
    // $('#winLose').show(4000);
    // $('#winLose').text('You Have 10 chances to Guess Letters!!!').css('color', 'black');  
    attemptsLeft = 10;
    $('#attemptsLeft').text(attemptsLeft);
    // lettersPresseddArr = [];
    $('#lettersPressed').text('Press a new letter').css('font-size', '1.2rem');
    $('img').attr('src', 'Assets/Images/G8.jpg').fadeIn(1000);
  }
};
// setTimeout(startGame(), 500);
startGame();


$(window).keyup(function(event) {
    var keyNum = event.keyCode;
    letter = String.fromCharCode(keyNum).toLowerCase();

  
    for (var j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === letter) {
        // converting a join arr into array
        replaceArr = s.split(' ');
       var x  = randomWord.indexOf(letter);
       replaceArr[x] = letter;
       //for showing purpose s join
       s = replaceArr.join(' ');
        $('#randomWord').text(s);
        roundOver();
     } 
    }
  if (randomWord[j] !== letter) {
    attemptsLeft--;
    $('#attemptsLeft').text(attemptsLeft);
    roundOver();
  }
  
  lettersPressedArr.push(letter);
  l = lettersPressedArr.join(' ');
  $('#lettersPressed').text(l);
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
    if(attemptsLeft <= 0) {
      $('#winLose').text('YOU LOSE!!!');
      $('#winLose').hide(1500);
      
    }
    startGame();
  } 
  
} 

}); 
  
   




