console.log("JavaScript Control Flow");

// Ask the user for a name
let userName = prompt("Who is playing today?");

// Ask the user for a game difficulty
let choosenDifficulty = prompt(
  "Choose difficulty (type: easy, medium, or hard):"
);
let maxGuess; // undefined until the switch case

switch (choosenDifficulty) {
  case "medium":
    maxGuess = 100;
    break;
  case "hard":
    maxGuess = 1000;
    break;
  default:
    maxGuess = 10;
}

// Create a number to guess
let numberToGuess = 7;
let minGuess = 1;

// Ask the user for a guess
// Store their guess for later use
let userGuess = prompt(
  `${userName}, guess a whole number between ${minGuess} and ${maxGuess}`
);

// Check to see if the guess is inbetween 1 and 10
if (userGuess < minGuess || userGuess > maxGuess) {
  alert(
    `${userName}, you gave me a number that was NOT between ${minGuess} and ${maxGuess}. Try Again.`
  );
} else {
  // Evaluate if the guess is equal to, higher than, or lower than the number to guess
  // Give feedback
  if (numberToGuess < userGuess) {
    alert(`${userName}, you guessed too high!`);
  } else if (numberToGuess > userGuess) {
    alert(`${userName}, you guessed to low!`);
  } else {
    alert(`Congrats ${userName}!`);
  }
}
