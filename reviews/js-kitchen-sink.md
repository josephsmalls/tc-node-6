# Review 1/17/22 - JavaScript

## Variables and Data Types

### Declaration Keywords

- var
- let
- const

## Operators

### Assignment

`=` assigns a value to a variable
`+=` addition then assigns a new value to a variable
`-=` subtraction then assigns a new value to a variable
`*=` multiplication then assigns a new value to a variable
`/=` division then assigns a new value to a variable
`%=` division remainder (modulus) then assigns a new value to a variable
`**=` exponentiation then assigns a new value to a variable
`++` increments a value by one then assigns a new value to a variable
`--` decrements a value by one then assigns a new value to a variable

### Logical

`&&` logical AND, requires both expressions (left and right) to result to `true`
`||` logical OR, requires one expression (left or right) to result to `true`
`!` logical NOT, negates (changes to its opposite) a value (e.g. `!true == false`)

### Arithmetic

`+` addition
`-` subtraction
`*` multiplication
`/` division
`%` division remainder (modulus)
`**` exponentiation

### Comparison

`==` (loose) equality, includes type coercion to compare equality between values
`!=` (loose) inequality, includes type coercion to compare equality between values
`===` strict equality, skips type coercion to compare equality between values
`!==` strict inequality, skips type coercion to compare inequality between values
`>` greater than
`>=` greater than or equal
`<` lesser than
`<=` lesser than or equal

## Control Flow

Determining what code is executed based on conditionals (expressions that evaluate to true or false)

### if/else

`if` statements

```js
// Just an if statement
if (condition == true) {
  // do one thing
}

// if statement with an else statement
if (condition == true) {
  // do one thing
} else {
  // do something else
}

// if statement followed by another if statement then a else statement
if (condition == true) {
  // do one thing
} else if (differentCondition == true) {
  // do something different
} else {
  // do something else
}
```

### Switch Case

Used to control the flow of your program given many different cases

```js
switch (expression) {
  case match1:
    // do something
    break;
  case match2:
    // do something
    break;
  case match3:
    // do something
    break;
  case match4:
    // do something
    break;
  default:
  // do something if none of the cases are true
}
```

## Loops

Are structures that allow iteration

If a condition is true, the loop will continue

### while

Will run zero or more times

```js
while (condition == true) {
  // repeat code
}
```

### do/while

Will run one or more times

```js
do {
  // repeat code
} while (condition == true);
```

### for

Includes three steps:

- initialization
- condition
- action (increment/decrement that re-assigns a variable that could eventually fail the condition)

```js
for (let i = 0; i < 10; i++) {
  // repeat code
}
```

## Functions

Code blocks that can be called with an identifer and given input to change it's output

Create a function by:

- Assignment to a variable (value is not _hoisted_)

```js
let add = function (num1, num2) {
  return num1 + num2;
};

add(1, 2); // return 3
```

- Declare a function with the `function` keyword (value is _hoisted_)

```js
function add(num1, num2) {
  return num1 + num2;
}

add(1, 2); // return 3
```

## Objects

Denoted by `{}`

Name/Value pairs seperated by a `:`, each pair seperated by a `,` on the object

- Objects have properties (name) with assigned values that either add a description or action to an object
- Properties with function values are called _methods_
- Property names follow the naming conventions for variables

```js
let hobbit = {
  name: "Frodo",
  age: 51,
  residence: "Shire",
  adventure: function () {
    console.log("Going on an adventure...");
  },
};
```

### Accessing/Re-assigning Property Values

- Dot Notation

```js
hobbit.name; // "Frodo"
hobbit.name += " Baggins"; // "Frodo Baggins"
```

- Bracket Notation

If a property name is stored in a variable as a string
Or if a property name is invalid

```js
let propertyName = "name";
hobbit[propertyName]; // "Frodo"
hobbit[propertyName] += " Baggins"; // "Frodo Baggins"
```

### Arrays

Denoted by `[]`

Comma seperated list of related values

```js
let acceptedAnswers = [
  "Github",
  "GitHub",
  "GitLab",
  "GitBucket",
  "Git Hub",
  "Git Lab",
  "Git Bucket",
  "github",
];
```

#### Pre-defined methods

- `forEach()` loops through each element in an array, calling a function with the element during each iteration
