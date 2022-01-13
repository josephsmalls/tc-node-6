console.log("Hello World!");

let classSize = 30;

// Global scope vs. Local scope
// var - local scoped, function scoped
// let, const - local scoped, block scoped

// Local scopes: Function vs Block
let name = "Ben";

// function test(name) {
//   if (true) {
//     console.log("INNER SCOPE:", name);
//   }
// }

// test("Seth");
// console.log("OUTSIDE OF FUNCTION:", name);

// function evaluateGrade(score) {
//   // Determine a grade depending on a score
//   let grade;

//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }

//   return grade;
// }

// function calcAvg(cumScore, size) {
//   return cumScore / size;
// }

// function generateNumber(max) {
//   return Math.round(Math.random() * max);
// }

// for (let student = 1, classAverage = 0; student <= classSize; student++) {
//   let score = generateNumber(100);
//   classAverage += score;

//   evaluateGrade(score);

//   if (student == classSize) {
//     console.log(
//       `The class of ${classSize} students earned an average of ${calcAvg(
//         classAverage,
//         classSize
//       )}`
//     );
//   }
// }
