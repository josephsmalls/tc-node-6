console.log("Kitchen Sink");

// INITIALIZING VARIABLES

let firstName = "Ben";
const numStates = 50;
let hasTerritories = true;

// OPERATORS

let five = 5;
let four = 4;

let sum = five + four;
let isGreater = five > four;
let product = 231 * 4;

// COMMENTS

// Single Line comment

/*
multi
line
comment
*/

// FUNCTIONS

function sayHello() {
  alert("Hello World!");
}

// sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert(`Sorry ${name}, you aren't old enough to view this page!`);
  }
}

// checkAge("Charles", 27);
// checkAge("Abby", 21);
// checkAge("James", 18);
// checkAge("John", 17);

// OBJECTS

let favVeggies = ["squash", "zucchini", "celery", "tomato"];

favVeggies.forEach(function (veggie) {
  console.log(veggie);
});

let people = [
  {
    name: "John",
    age: 14,
  },
  {
    name: "Seth",
    age: 16,
  },
  {
    name: "Ben",
    age: 21,
  },
  {
    name: "Cruz",
    age: 22,
  },
  {
    name: "Michael",
    age: 51,
  },
];

people.forEach(function (person) {
  checkAge(person.name, person.age);
});

function getLength(phrase) {
  console.log(phrase.length);
  return phrase.length;
}

let result = getLength("Hello World");

if (result % 2 == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
