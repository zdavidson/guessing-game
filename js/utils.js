import {
  guessBoxes,
  playAgainButton,
  input,
  resultHeader,
} from "./variables.js";

import { counter, randomNumber } from "./main.js ";

// Choose a Random Number
const pickANumber = () => Math.floor(Math.random() * 100 + 1);

// Button Disabler
let submitButton = document.getElementById("submit-button");
const submitButtonDisabler = () => submitButton.toggleAttribute("disabled");

// Clear Guess Boxes
const clearGuessBoxes = () => {
  for (let i = 0; i < counter; i++) {
    guessBoxes[i].innerHTML = "";
    guessBoxes[i].classList.remove("yellow-shadow");
    guessBoxes[i].classList.remove("orange-shadow");
    guessBoxes[i].classList.remove("red-shadow");
    guessBoxes[i].classList.remove("green-shadow");
  }
};

// Add box-shadow
const addBoxShadow = (counter) => {
  if (counter < 2) {
    guessBoxes[counter].classList.add("yellow-shadow");
    return true;
  }
  if (counter > 1 && counter < 4) {
    guessBoxes[counter].classList.add("orange-shadow");
  }
  if (counter > 3) {
    guessBoxes[counter].classList.add("red-shadow");
  }
};

// Compare Guess and randomNumber
const compareGuessAndNumber = (guess) => {
  if (guess == randomNumber) {
    resultHeader.innerHTML = "You Won!";
    guessBoxes[counter].classList.add("green-shadow");
    submitButtonDisabler();
  } else if (guess < randomNumber) {
    resultHeader.innerHTML = "Too low, try again!";
  } else if (guess > randomNumber) {
    resultHeader.innerHTML = "Too high, guess again!";
  }

  addBoxShadow(counter);
};

// If user exhausts all guesses
const lastBoxAction = () => {
  if (
    guessBoxes[counter - 1].innerHTML ==
    `<p class="text-info">${randomNumber}</p>`
  ) {
    submitButtonDisabler();
    resultHeader.innerHTML = "You Won!";
  } else {
    resultHeader.innerHTML = "Better luck next time!";
  }
};

export {
  pickANumber,
  submitButton,
  submitButtonDisabler,
  guessBoxes,
  clearGuessBoxes,
  playAgainButton,
  input,
  resultHeader,
  compareGuessAndNumber,
  lastBoxAction,
};
