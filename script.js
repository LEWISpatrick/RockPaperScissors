/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScores = {computerScore : 0, playerScore : 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function computerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score = 0; // Initialize score variable

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score += 0;
  }

  // All situations where human wins, set `score` to 1
  // Make sure to use else ifs here, and correct string comparisons
  else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")) {
    score += 1;
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score -= 1;
  }

  // return score
  return score;
}



// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const computerScore = document.getElementById('computer-score')

  hands.innerText = '🤖' + computerChoice + '🤖 VS 🧑' + playerChoice + '🧑';
  playerScore.innerText = "🧑 " + totalScores['playerScore'] + " 🧑";
  computerScore.innerText = "🤖 " + totalScores['computerScore'] +" 🤖"  ; 

  if (score === -1) {
      resultDiv.innerText = 'You lose!';
  } else if (score === 1) {
      resultDiv.innerText = 'You win!';
  } else {
      resultDiv.innerText = 'It\'s a tie!!!';
  }
}


function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const compChoice = computerChoice();
  console.log({ compChoice });
  const score = getResult(playerChoice, compChoice); 
  console.log({ score });
  totalScores['playerScore'] += score;
  totalScores['computerScore'] += score * -1;
  showResult(score, playerChoice, compChoice); // Pass playerChoice and compChoice to showResult
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })


  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButtton = document.getElementById('endGameButton')
  endGameButtton.onclick = () => endGame(totalScores)

}

// ** endGame function clears all the text on the DOM **
function endGame(totalScores) {
  totalScores["playerScore"] = 0
  totalScores["computerScore"] = 0
  const resultDiv = document.getElementById('result');
  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  resultDiv.innerText = ''
  playerScore.innerText  = ''
  hands.innerText = ''
}

playGame()