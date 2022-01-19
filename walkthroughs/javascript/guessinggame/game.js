console.log("Guessing Game");

// Number to guess
// Generate a random number between 1 and 100
let numToGuess = Math.floor(Math.random() * 100) + 1;
let guess;

// Repeat if guess is incorrect
while (guess != numToGuess) {
  // Ask the user for a guess (*prompt returns a string data type*))
  guess = parseInt(prompt("Guess a number between 1 and 100:"));

  // Check to see if their guess is a number
  // parseInt returns a number, or NaN if it cannot be converted to a valid number
  // isNaN returns true or false, depending on the given input being NaN
  if (!isNaN(guess)) {
    // Check if the guess is correct, high, or low
    if (guess == numToGuess) {
      alert("Congratulations!");
    } else if (guess > numToGuess) {
      alert("Too high");
    } else {
      alert("Too low");
    }
  } else {
    // If guess isn't valid (not a number, or out of range) ask for another guess
    alert("You didn't give me a valid number between 1 and 100..");
  }
}
