const choices = ["rock", "paper", "scissors"];
const computerChoose = () =>
  choices[Math.floor(Math.random() * choices.length)];
const updateScore = () => {
  document.getElementById("userScore").innerHTML = score.user;
  document.getElementById("computerScore").innerHTML = score.computer;
}
let score = {user: 0, computer: 0};
const playRound = (userChoice) => {
  let computerChoice = computerChoose();
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "tie";
        case "paper":
          score.computer++;
          console.log(score);
          updateScore();
          return "loss";
        case "scissors":
          score.user++;
          console.log(score);
          updateScore();
          return "win";
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          score.user++;
          console.log(score);
          updateScore();
          return "win";
        case "paper":
          return "tie";
        case "scissors":
          score.computer++;
          console.log(score);
          updateScore();
          return "loss";
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          score.computer++;
          console.log(score);
          updateScore();
          return "loss";
        case "paper":
          score.user++;
          console.log(score);
          updateScore();
          return "win";
        case "scissors":
          return "tie";
      }
      break;
    default:
      console.log("Enter rock, paper or scissors");
  }
  
};
const container = document.querySelector("#container");


const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener('click', () => playRound("rock"));

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener('click', () => playRound("paper"));

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener('click', () => playRound("scissors"));




