const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const updateScore = document.querySelector(".updateScore");
const startBtn = document.querySelector(".startBtn");
const main = document.querySelector(".main-page");
const section = document.querySelector(".home-page");
const resetBtn = document.querySelector(".resetBtn");

let playerScore = 0;
let computerScore = 0;
const scoreLimit = 5;

startBtn.addEventListener("click", () => {
  section.style.display = "none";
  main.style.display = "flex";
});

function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playerChoice(player) {
  const computer = computerChoice();
  result.textContent = `You chose "${player}" computer chose "${computer}"`;

  if (player === computer) {
    updateScore.textContent = "draw!";
    updateScore.style.color = "blue";
  } else if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    playerScore++;
    updateScore.textContent = " ";
    updateScore.textContent += `Player: ${playerScore} Computer: ${computerScore}`;
    updateScore.style.color = "black";
  } else {
    computerScore++;
    updateScore.textContent = " ";
    updateScore.textContent += `Player: ${playerScore} Computer: ${computerScore}`;
    updateScore.style.color = "black";
  }

  if (playerScore === scoreLimit || computerScore === scoreLimit) {
    if (playerScore === scoreLimit) {
      result.textContent = `You win!`;
      result.style.color = "green";
      result.style.fontSize = "2em";
      result.style.fontWeight = "bold";
      resetBtn.style.display = "block";
      disableBtn();
      return;
    } else {
      result.textContent = `You Lose, Computer Win!`;
      result.style.color = "maroon";
      result.style.fontSize = "2em";
      result.style.fontWeight = "bold";
      resetBtn.style.display = "block";
      disableBtn();
      return;
    }
  }
}

function disableBtn() {
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissor.style.pointerEvents = "none";
}

rock.addEventListener("click", () => playerChoice("rock"));
paper.addEventListener("click", () => playerChoice("paper"));
scissor.addEventListener("click", () => playerChoice("scissor"));

function reloadGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "Choose your move!";
  result.style.color = "";
  result.style.fontSize = "";
  result.style.fontWeight = "";
  resetBtn.style.display = "none";
  updateScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  rock.style.pointerEvents = "auto";
  paper.style.pointerEvents = "auto";
  scissor.style.pointerEvents = "auto";
}

resetBtn.addEventListener("click", () => reloadGame());
