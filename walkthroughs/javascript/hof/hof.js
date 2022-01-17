console.log("HOF");

// Arrow Notation Functions

// function test() {
//   console.log("test");
// }

// Same as
// const test = function () {
//   console.log("test");
// };

// Same as
// const test = () => {
//   console.log("test");
// };

// Same as (implicit return)
// const test = () => console.log("test");

// Taking a function value as a parameter

let numbers = [1, 2, 3, 4, 5];

const add = (x, y) => x + y;

function double(num) {
  return num * 2;
}

function halved(num) {
  return num / 2;
}

let sum = numbers.reduce(add);

console.log(sum);

let doubledNumbers = numbers.map(double);

console.log(doubledNumbers);

// Returns a function value
function createGreeting(greeting) {
  return function (name) {
    // String Concatenation
    // console.log(greeting + " " + name + "!");
    // String Interpolation
    console.log(`${greeting} ${name}!`);
  };
}

let sayHowdy = createGreeting("Howdy");
let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

sayHowdy("Ben");
sayHowdy("Seth");
sayHello("Cruz");
sayHello("Billy");
sayHi("Michael");
sayHi("Jeremy");

function lessThan(refNumber) {
  return function (checkNumber) {
    console.log(`${refNumber} > ${checkNumber} is ${refNumber > checkNumber}`);
  };
}

let lessThan100 = lessThan(100);

lessThan100(50); // true
lessThan100(150); // false
lessThan100(100); // false

let genres = ["Thriller", "Action", "Adventure", "Comedy", "Romance", "Horror"];

function printAllCaps(str) {
  console.log(str.toUpperCase());
}

genres.forEach(printAllCaps);
