// Ex:
// declaration keyword - let
// variable name/identifier - city
// variable value - "Hoover"

// Initialization - creating and assigning variables
// Declaration - with a declaration keyword and identifier
// Assignment - using the assignment operator to assign a variable a value

// var and let variables can be re-assigned
// const variables cannot be re-assigned

// Camel Casing is a naming convention in JS
// Ex: thisIsCamelCased

const firstName = "Frodo";
let lastName = "Baggins";
var age = 51;
let isRight = true;

let fullName = firstName + " " + lastName; // "Frodo Baggins"
console.log(fullName);

// Template strings denoted by backticks
let templateFullName = `${firstName} ${lastName}`; // "Frodo Baggins"
console.log(templateFullName);

let city = "Shire";
let pasttime = "adventuring";

let myStory =
  "I am " + fullName + ". I live in " + city + ". I like " + pasttime + ".";
console.log(myStory);

let templateMyStory = `I am ${fullName}. I live in ${city}. I like ${pasttime}.`;
console.log(templateMyStory);
