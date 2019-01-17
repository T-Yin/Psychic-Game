// Score variables.
var wins = 0;
var losses = 0;
var guessLeft = 9;


var alphabet = generateAlphabet();

  var $alreadyGuessed = document.getElementById("already-guessed");
  var $wins = document.getElementById("wins");
  var $losses = document.getElementById("losses");
  var $guessLeft = document.getElementById("guessLeft");

  function updateScore() {
  $wins.textContent = "Number of Wins: " + wins;
  $losses.textContent = "Number of Losses: " + losses;
  $guessLeft.textContent = "Guesses Left: " + guessLeft;
  }
  
  updateScore();

 

// Computer generates a random letter.
function generateAlphabet(){
    var arr = [];
    for(var i = 97; i <= 122; i++){
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }

  function resetScore() {
    alreadyGuessedArr.length = 0;
    guessLeft = 9;
    $alreadyGuessed.textContent = "";
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer Guess:", computerGuess);
  }

  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  
//   Shows the computer's choice in the log.
  console.log("Computer Guess:", computerGuess);

  var alreadyGuessedArr = [];
  
  document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyGuessedArr.push(userGuess);
  
    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
    

    if (userGuess === computerGuess) {
        alert("You win! Play again?");
        console.log("You win!");
        wins++;
        resetScore();
        updateScore();
    } else {
        guessLeft--;
        updateScore();
    }

    if (guessLeft === 0) {
        alert("You lose! Play again? ");
        console.log("You lose!");
        losses++;
        resetScore();
        updateScore();  
    }
}