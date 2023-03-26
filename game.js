const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } 
  else if(playerSelection === "rock" && computerSelection === "paper") return "You lose!";
  else if(playerSelection === "paper" && computerSelection === "rock") return "You win!";
  else if(playerSelection === "scissors" && computerSelection === "rock")  return "You lose!";
  else{ return "You win!"; }
}


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
  });
})
