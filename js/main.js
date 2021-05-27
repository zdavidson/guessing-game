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
} from "./utils.js";

let counter = 0;
let randomNumber = pickANumber();

console.log("Random Number:", randomNumber);

// Log Guesses to Boxes
const logGuesses = () => {
  let currentGuess = input.value;
  let currentGuessFormatted = `<p class="text-info">${input.value}</p>`;

  // Add guess to box
  if (guessBoxes[counter].innerHTML == "") {
    let guessBox = guessBoxes[counter];
    guessBox.innerHTML = currentGuessFormatted;
    counter++;
    console.log("Counter:", counter);
  }

  // Check Guess
  compareGuessAndNumber(currentGuess);

  // Clear input
  input.value = "";
};

// Call LogGuesses Function
submitButton.addEventListener("click", () => {
  logGuesses();

  if (counter >= document.querySelectorAll(".guess-box").length) {
    submitButtonDisabler();

    if (
      guessBoxes[counter - 1].innerHTML ==
      `<p class="text-info">${randomNumber}</p>`
    ) {
      submitButtonDisabler();
      resultHeader.innerHTML = "You won!";
    } else {
      resultHeader.innerHTML = "Better luck next time!";
    }
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

////// TODOS
// TODO: Enable play again button after 5 guesses or game is won
// TODO: Check that input value is a number when converted isNan
// input.addEventListener("keyup", () => {
//   const parsed = parseInt(input.value, 10);
//   if (isNaN(parsed)) {
//     resultHeader.innerHTML = "Numbers only";
//   } else {
//     buttonDisabler();
//   }
// });

// TODO: Check for edge cases and provide response (if user sumbission is: lower than 1, higher than 100, not a number)
// TODO: Add animation of confetti when user wins
