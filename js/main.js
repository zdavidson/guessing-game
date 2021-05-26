////// VARIABLES
// Global Variables
let input = document.getElementById("user-guess");
let guessBoxes = document.getElementsByClassName("guess-box");
let resultHeader = document.getElementById("result");

// Buttons
let submitButton = document.getElementById("submit-button");
let playAgainButton = document.getElementById("play-again-button");

let counter = 0;

////// FUNCTIONS
// Choose a Random Number
const pickANumber = () => Math.floor(Math.random() * 100 + 1);
let randomNumber = pickANumber();
console.log("Random Number:", randomNumber);

// Compare Guess and randomNumber
const compareGuessAndNumber = (guess) => {
  if (guess == randomNumber) {
    resultHeader.innerHTML = "You Won!";
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

// Button Disabler
const submitButtonDisabler = () => submitButton.toggleAttribute("disabled");

// Log Guesses to Boxes
const logGuesses = () => {
  let currentGuess = input.value;
  let currentGuessFormatted = `<p class="text-info">${input.value}</p>`;

  if (guessBoxes[counter].innerHTML == "") {
    let guessBox = guessBoxes[counter];
    guessBox.innerHTML = currentGuessFormatted;
    counter++;
    console.log("Counter:", counter);
  }

  compareGuessAndNumber(currentGuess);

  input.value = "";
};

// Clear Guess Boxes
const clearGuessBoxes = () => {
  for (let i = 0; i < counter; i++) {
    guessBoxes[i].innerHTML = "";
    guessBoxes[i].classList.remove("yellow-shadow");
    guessBoxes[i].classList.remove("orange-shadow");
    guessBoxes[i].classList.remove("red-shadow");
  }
};

////// EVENT LISTENERS
// Call LogGuesses Function
submitButton.addEventListener("click", () => {
  logGuesses();

  if (counter >= document.querySelectorAll(".guess-box").length) {
    submitButtonDisabler();
    resultHeader.innerHTML = "Better luck next time!";
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
