const choices = ["rock", "paper", "scissors"];
const computerChoose = () =>
  choices[Math.floor(Math.random() * choices.length)];
const playRound = (userChoice, round) => {
  let computerChoice = computerChoose();
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "tie";
        case "paper":
          return "loss";
        case "scissors":
          return "win";
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "win";
        case "paper":
          return "tie";
        case "scissors":
          return "loss";
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "loss";
        case "paper":
          return "win";
        case "scissors":
          return "tie";
      }
      break;
    default:
      console.log("Enter rock, paper or scissors");
  }
};

const game = () => {
  let i = 0;
  let userScore = 0;
  let computerScore = 0;
  while (i < 5) {
    let userPrompt = prompt("Rock, paper or scissors?");
    userPrompt;
    if (
      userPrompt == "rock" ||
      userPrompt == "paper" ||
      userPrompt == "scissors"
    ) {
      switch (playRound(userPrompt, i + 1)) {
        case "win":
          userScore += 1;
          break;
        case "loss":
          computerScore += 1;
          break;
      }
      alert(`user: ${userScore} computer: ${computerScore}`);
      i++;
    } else {
      alert("Enter rock, paper or scissors");
    }
  }
  if (userScore > computerScore) {
    alert(`You won ${userScore}/${computerScore}`);
  }
  if (computerScore > userScore) {
    alert(`You lost ${userScore}/${computerScore}`);
  } else {
    alert(`You tied ${userScore}/${computerScore}`);
  }
};
