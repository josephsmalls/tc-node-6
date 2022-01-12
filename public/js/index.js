console.log("Hello World!");

let userInput = prompt("What is your name?");
let myName = "Ben";

if (userInput == myName) {
  console.log(`Oh cool! My name is ${userInput} too!`);
} else {
  console.log(`Hello ${userInput}!`);
}

let linePlace = 2;
let hasDocuments = false;

if (linePlace == 1 && hasDocuments) {
  console.log("You're next! Come on in.");
} else if (linePlace == 2 && !hasDocuments) {
  console.log(
    "You're turn is coming up, but you need to hurry and get your documents!!!"
  );
} else {
  console.log("Make sure you have your documents!");
}

switch (linePlace) {
  case 1:
    console.log("You're next! Come on in.");
    break;
  case 2:
    console.log("You're turn is coming up! Make sure to have your documents.");
    break;
  default:
    console.log(`You are ${linePlace}. Be ready.`);
}
