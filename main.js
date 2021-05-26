// Global Variables
let randomNumber = Math.floor(Math.random() * 100 + 1);
let input = document.getElementById("user-guess");
let submitButton = document.getElementById("submit-button");
let playAgainButton = document.getElementById("play-again-button");
let guessBoxes = document.getElementsByClassName("guess-box");
let resultHeader = document.getElementById("result");

let counter = 0;

console.log("Random Number:", randomNumber);

// Compare Guess and randomNumber
const compareGuessAndNumber = (guess) => {
  if (guess == randomNumber) {
    resultHeader.innerHTML = "You Won!";
    buttonDisabler();
  } else {
    resultHeader.innerHTML = "Sorry, try again!";
  }
};

// Button Disabler
const buttonDisabler = () => submitButton.toggleAttribute("disabled");

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

// Call LogGuesses Function
submitButton.addEventListener("click", () => {
  logGuesses();

  if (counter >= document.querySelectorAll(".guess-box").length) {
    buttonDisabler();
    resultHeader.innerHTML = "Better luck next time!";
  }
});

// TODO: Styles {CSS}

// TODO: Disable submit button once correct guess has been reached or 5 guesses have been made
//   } else if (guessBoxes[counter].innerHTML !== "") {
//     button.disabled = true;
//   }

// TODO: Display play again button after 5 guesses or game is won
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
