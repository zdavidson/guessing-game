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

// Compare Guess and randomNumber
const compareGuessAndNumber = (guess) => {
  if (guess == randomNumber) {
    resultHeader.innerHTML = "You Won!";
    guessBoxes[counter - 1].classList.add("green-shadow");
    submitButtonDisabler();
  } else if (guess < randomNumber) {
    resultHeader.innerHTML = "Too low, try again!";
    if (counter < 3) {
      guessBoxes[counter - 1].classList.add("yellow-shadow");
    }
    if (counter > 2 && counter < 5) {
      guessBoxes[counter - 1].classList.add("orange-shadow");
    }
    if (counter > 4) {
      guessBoxes[counter - 1].classList.add("red-shadow");
    }
  } else if (guess > randomNumber) {
    resultHeader.innerHTML = "Too high, guess again!";
    if (counter < 3) {
      guessBoxes[counter - 1].classList.add("yellow-shadow");
    }
    if (counter > 2 && counter < 5) {
      guessBoxes[counter - 1].classList.add("orange-shadow");
    }
    if (counter > 4) {
      guessBoxes[counter - 1].classList.add("red-shadow");
    }
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
};
