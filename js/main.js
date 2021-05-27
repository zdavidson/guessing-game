import {
  pickANumber,
  submitButton,
  submitButtonDisabler,
  playAgainButton,
  input,
  guessBoxes,
  resultHeader,
  clearGuessBoxes,
  compareGuessAndNumber,
  lastBoxAction,
} from "./utils.js";

let counter = 0;
let randomNumber = pickANumber();

// Update Counter
const updateCounter = () => counter++;

// Log Guesses to Boxes
const logGuesses = (currentGuess) => {
  let currentGuessFormatted = `<p class="text-info">${currentGuess}</p>`;

  if (guessBoxes[counter].innerHTML == "") {
    let guessBox = guessBoxes[counter];
    guessBox.innerHTML = currentGuessFormatted;
  }
};

// Submit Guess
submitButton.addEventListener("click", () => {
  // Find the current guess
  let currentGuess = input.value;
  let isnum = /^\d+$/.test(currentGuess);

  // Check for edge cases
  if (!isnum) {
    resultHeader.innerHTML = "Enter a number";
    input.value = "";
    return;
  }

  if (currentGuess < 1) {
    resultHeader.innerHTML = "Positive numbers only!";
    input.value = "";
    return;
  }

  if (currentGuess > 100) {
    resultHeader.innerHTML = "Guess a number from 1 to 100";
    input.value = "";
    return;
  }

  // Log guess to the boxes
  logGuesses(currentGuess);

  // See if it matches the randomNumber
  compareGuessAndNumber(currentGuess);

  // Clear the input for the next guess
  input.value = "";

  // Update the Counter
  updateCounter();
  console.log("Counter:", counter);

  // If the user exhausts all their guesses
  if (counter >= document.querySelectorAll(".guess-box").length) {
    submitButtonDisabler();
    lastBoxAction();
  }
});

// Play Again Button
playAgainButton.addEventListener("click", () => {
  clearGuessBoxes();
  randomNumber = pickANumber();
  console.log("Second round:", randomNumber);
  resultHeader.innerHTML = "Good luck!";
  submitButtonDisabler();

  counter = 0;
});

export { counter, randomNumber };
