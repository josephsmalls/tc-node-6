console.log("Javascript Loops Exercise");

// How many numbers from 1 to 100 are not divisible by 3, 5, or both?
let start = 1;
let end = 100;
let count = 0;

for (let number = 1; number <= 100; number++) {
  // Is number NOT divisible by 3 AND 5
  if (number % 5 != 0 && number % 3 != 0) {
    count++;
  }
}

console.log(count);
