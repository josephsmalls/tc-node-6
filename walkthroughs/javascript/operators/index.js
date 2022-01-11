console.log("JS Operators");

console.log("Ben" > 100);
// "Ben" ==> NaN
// 100 ==> "100"

// EXERCISE 1

let a = 20;
let b = 4;

let add = a + b;
let subtract = a - b;
let multiply = a * b;
let divide = a / b;
let mod = a % b;
let exponent = a ** b;

console.log(add, subtract, multiply, divide, mod, exponent);

// EXERCISE 2

let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

// What is the value of: a + str?
console.log(c + str); // "1111"
// What is the value of: a + str2?
console.log(c + str2); // "11eleven"
// What is the value of: a + isPresent?
console.log(c + isPresent); // 12
// What is the value of: a + firstName?
console.log(c + firstName); // "11Jackie"
// What is the value of: a + lastName?
console.log(c + lastName); // "11Chan"

// EXERCISE 3

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

// What is the value of: d == str3?
console.log(d == str3); // true
// What is the value of: d === str3?
console.log(d === str3); // false
// What is the value of: !isPresent2?
console.log(!isPresent2); // true
// What is the value of: (“eleven” == str4 && d >= str3)?
console.log(d >= str3 && "eleven" == str4); // false
// What is the value of: (!isPresent2 || isPresent2)?
console.log(!isPresent2 || isPresent2); // true
// What is the value of: 0 == false?
console.log(0 == false); // true?
// What is the value of: 0 === false?
console.log(0 === false); // false
// What is the value of: 0 != false?
console.log(0 != false); // false
// What is the value of 0 !== false?
console.log(0 !== false); // true
