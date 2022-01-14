console.log("JS Objects Exercise");

const numbers = [1, 2, 3, 4, 5];

/**
 * Takes an array of numbers as a parameter and returns the sum value of each number in the array.
 */
function arraySum(arr) {
  let sum = 0;

  arr.forEach(function (num) {
    sum += num;
  });

  return sum;
}

let result = numbers.reduce(function (sum, num) {
  console.log(sum, num);
  return sum + num;
}, 0);

console.log(result);

const book = {};

book.title = prompt("What is the title of your favorite book?");
book.author = prompt("What is the author of your favorite book?");
book.pageCount = prompt("How many pages does your favorite book have?");
book.readCount = prompt("How many times have you read your favorite book?");

book.info = function () {
  return `${this.title} by ${this.author} is ${this.pageCount} page(s) long, that has been read ${this.readCount} time(s).`;
};

console.log(book.info());
