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

console.log(getComputerChoice());