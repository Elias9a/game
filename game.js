const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  result.classList.remove("result-win", "result-lose", "result-tie")
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } 
  else if((playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "rock")){
    computerScore++
    return "You lose!";
  }else{ 
    playerScore++
    return "You win!"; }
}

const buttons = document.querySelectorAll("button");
const playerSelection = document.querySelector('#player-score');
const computerSelection = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score')
const playAgainButton = document.querySelector('#play-again')

const updateScores = () => {
  playerScoreDisplay.textContent = `player: ${playerScore}`;
  computerScoreDisplay.textContent = `computer: ${computerScore}`;
};

const endGame = () => {
  buttons.forEach(btn => {
    btn.removeEventListener("click", handleClick);
    btn.disabled = true;
  })

  playAgainButton.disabled = false;

  let resultColorClass = "";
  if (playerScore > computerScore) {
    resultColorClass = "result-win";
  } else if (playerScore < computerScore) {
    resultColorClass = "result-lose";
  } else {
    resultColorClass = "result-tie";
  }

  const finalResult = playerScore > computerScore
  ? "You win the game!" : playerScore < computerScore
  ? "You lose the game!" : "It's a tie game";
  
  result.textContent = finalResult;
  result.classList.remove("result-win", "result-lose", "result-tie");
  result.classList.add(resultColorClass);
}

const playAgain = () => {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0; 
  result.textContent = "";
  updateScores();
  buttons.forEach(btn => btn.disabled = false);
  handleClick()
}

const handleClick = () => {
  buttons.forEach(btn => {
    btn.removeEventListener("click", handleButtonClick);
    btn.addEventListener("click", handleButtonClick)
  })
}

const handleButtonClick = (event) => {
  const btn = event.target;
  roundCount++;
  result.textContent = playRound(btn.id, computerPlay());
  updateScores();
  
  if(roundCount === 5 || playerScore === 3 || computerScore === 3) {
    endGame()
    return;
  }
}
 
handleClick()
playAgainButton.addEventListener("click", playAgain)
