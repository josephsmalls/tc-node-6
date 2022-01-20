console.log("JavaScript Loops");

let isPlaying = true;

while (isPlaying) {
  // Generate math problem (addition)
  let a = Math.round(Math.random() * 10); // generate a random number from 0 to 10
  let b = Math.round(Math.random() * 10); // generate a random number from 0 to 10
  let problem = `${a} + ${b}`;
  let answer = a + b;
  // Ask the user to answer the problem
  let userAnswer = prompt(
    `What is the answer to ${problem}? \n Type 'quit' to leave.`
  );

  // If user types 'quit', change play status to false to end the loop
  if (userAnswer == "quit") {
    isPlaying = false;
  } else {
    // Feedback
    if (userAnswer == answer) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  }
}

// Repeat, SHOULD NOT REPEAT IF USER TYPES "QUIT"
