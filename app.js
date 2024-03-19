"use strict";

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice; //save it globally so we can access it wherever

possibleChoices.forEach((btn) =>
  addEventListener("click", (e) => {
    userChoice = e.target.id; // first button id="rock"
    userChoiceDisplay.innerHTML = userChoice; // for pressing first button we get rock
    generateComputerChoice();
    result();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
  if (randomNumber === 1) {
    computerChoiceDisplay.innerHTML = "rock";
  } else if (randomNumber === 2) {
    computerChoiceDisplay.innerHTML = "paper";
  } else {
    computerChoiceDisplay.innerHTML = "scissors";
  }
}
// generateComputerChoice();

function result() {
  if (userChoiceDisplay.innerHTML === computerChoiceDisplay.innerHTML) {
    resultDisplay.innerHTML = "It is even.";
  } else if (
    userChoiceDisplay.innerHTML === "rock" &&
    computerChoiceDisplay.innerHTML !== "paper"
  ) {
    resultDisplay.innerHTML = "User won! :)";
  } else if (
    userChoiceDisplay.innerHTML === "paper" &&
    computerChoiceDisplay.innerHTML !== "scissors"
  ) {
    resultDisplay.innerHTML = "User won! :)";
  } else if (
    userChoiceDisplay.innerHTML === "scissors" &&
    computerChoiceDisplay.innerHTML !== "rock"
  ) {
    resultDisplay.innerHTML = "User won! :)";
  } else {
    resultDisplay.innerHTML = "Computer won! :(";
  }
}

// function result() {
//   if (userChoiceDisplay.innerHTML === computerChoiceDisplay.innerHTML) {
//     resultDisplay.innerHTML = "It is even.";
//   } else if (
//     userChoiceDisplay.innerHTML === "rock" &&
//     computerChoiceDisplay.innerHTML === "scissors"
//   ) {
//     resultDisplay.innerHTML = "User won! :)";
//   } else if (
//     userChoiceDisplay.innerHTML === "rock" &&
//     computerChoiceDisplay.innerHTML === "paper"
//   ) {
//     resultDisplay.innerHTML = "Computer won! :(";
//   } else if (
//     userChoiceDisplay.innerHTML === "paper" &&
//     computerChoiceDisplay.innerHTML === "scissors"
//   ) {
//     resultDisplay.innerHTML = "Computer won! :(";
//   } else if (
//     userChoiceDisplay.innerHTML === "paper" &&
//     computerChoiceDisplay.innerHTML === "rock"
//   ) {
//     resultDisplay.innerHTML = "User won! :)";
//   } else if (
//     userChoiceDisplay.innerHTML === "scissors" &&
//     computerChoiceDisplay.innerHTML === "paper"
//   ) {
//     resultDisplay.innerHTML = "User won! :(";
//   } else if (
//     userChoiceDisplay.innerHTML === "scissors" &&
//     computerChoiceDisplay.innerHTML === "rock"
//   ) {
//     resultDisplay.innerHTML = "Computer won! :(";
//   }
// }
