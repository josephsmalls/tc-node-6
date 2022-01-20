# Review 1/13/22 - JavaScript Loops

Loops repeat code statements until a condition is _false_

Can be read as: _Continue repeating until false_

## Types

- for
- while
- do/while

## Parts

- Keywords `for|while|do/while`
- condition `()`
- code block `{}`

`break;` will cause the execution to exit the loop or switch statement

## For

Use the `for` keyword

Parentheses include:

- Initialization (declaration and assignment)
- Condition
- Action (increment, decrement, etc)

```js
for (let i = 1; i < 10; i++) {
  // code to repeat
}
```

## While

Use `while` keyword followed by a condition

Will run 0 or more times

```js
while (isOnline) {
  // code to repeat
}
```

## Do/While

Use `do` keyword followed by the loop body, and `while` keyword followed by a condition

Will run 1 or more times

```js
do {
  // code to repeat
} while (isOnline);
```

## Control Flow

Conditions that determine the flow of our program

### Selection Statements

```js
if (isOnline) {
  // make online bubble green
} else {
  // make online bubble transparent/gray
}
```

### Switch Cases

```js
switch (role) {
  case "node":
    // access to node channel
    break;
  case "csharp":
    // access to csharp channel
    break;
  case "node-flex":
    // access to node-flex channel
    break;
  default:
  // access to general channel
}
```

## Data Types

### Primitive

- undefined
- null
- boolean
- string
- symbol
- bigint (big integer)
- number

### Structural

- Objects
  - Functions

## Loose Equality

`==` checks if two values are the same, INCLUDES _type coercion_

- Which means that if the values are of different data types, the JS engine will change one of the values to the data type of the other, to then compare equality.

```js
let a = 7;
let b = 7;
let c = "7";

a == b; // true
a == c; // true, string is converted to a number, or vise versa
```

## Pre/Post Increment/Decrement

### Increment `++`

Will add 1 to the variable value, AND RE-ASSIGN

### Decrement `--`

Will subtract 1 to the variable value, AND RE-ASSIGN

### Pre/Post

Start with `let a = 4;`

`let b = a++;`: assigning b with the current value of a (4) BEFORE incrementing by 1 (which makes a 5)
`let b = ++a;`: incrementing a by 1 (which makes a 5), THEN assigning b the new value of a (5)
