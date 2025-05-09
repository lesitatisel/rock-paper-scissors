// Problem Solving Steps
// 1. Understanding the problem

// 2. Plan

// 3. Pseudocode



const getComputerChoice = function() {
  const choice = Math.floor(Math.random() * (4 - 1) + 1);
  
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors"
  }
}

const getHumanChoice = function() {
  const choice = prompt("Enter your choice (r) / (p) / (s):").toLocaleLowerCase();
  if (choice == "r") {
    return "rock";
  } else if (choice == "p") {
    return "paper";
  } else {
    return "scissors"
  }
}

let humanScore = 0;
let computerScore = 0;

const playRound = function(humanChoice, computerChoice) {
  const human = humanChoice();
  const computer = computerChoice();

  console.log(`User: ${human}  vs  Computer: ${computer}`)

  if (human == computer) {
    console.log("DRAW!")
  }

  if (human == "rock") {
    if (computer == "paper") {
      console.log("COMPUTER WINS!")
      computerScore++;
    } else if (computer == "scissors") {
      console.log("USER WINS!")
      humanScore++;
    }
  } else if (human == "paper") {
    if (computer == "rock") {
      console.log("USER WINS!")
      humanScore++;
    } else if (computer == "scissors") {
      console.log("COMPUTER WINS!")
      computerScore++;
    }
  } else if (human == "scissors") {
    if (computer == "paper") {
      console.log("USER WINS!")
      humanScore++;
    } else if (computer == "rock") {
      console.log("COMPUTER WINS!")
      computerScore++;
    } 
  }

  console.log("Human Score: " + humanScore)
  console.log("Computer Score: " + computerScore)
}

for (let index = 0; index < 5; index++) {
  console.log("#############")
  console.log(`Round ${index + 1}: `)
  playRound(getHumanChoice, getComputerChoice);
  console.log("\n")
}

// console.log(getHumanChoice());
// console.log(getComputerChoice());