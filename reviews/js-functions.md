# Review 1/14/22 - JavaScript Functions

Functions are code blocks that can accept parameters, also called _arguments_, that determine the output.

Functions are called, or _invoked_, by the function name (_identifiers_) followed by parentheses.

Functions are _First Class Citizens_, which means:

- can be assigned to a variable
- can be passed as a parameter to a function
- can be returned from a function
- can be assigned properties
- can be stored as property values on data structures

## Scope

Scopes are containers that determine the visibility of local variables

Works in an inside-out manner.

1. Global
2. Local
   1. Function, created by function bodies
   2. Block, created by if, else, switch, or loop code blocks

Example:

```js
function outer() {
  let value1 = "outer";
  if (true) {
    let value = "inner";
    console.log(value1); // "outer; value1 can be accessed from an inner scope"
  }

  console.log(value); // ReferenceError; value one is not accessible from the outer scope
}
```

### Hoisting

Function **declarations** are _hoisted_ to the top of the containing scope

This means that you can call a function before it is defined in a scope, because the definition is raised to the top of that scope before program execution.

> NOTE: Variable declarations are also hoisted, although their values are not

```js
greet("Ben"); // "HELLO Ben"

function greet(name) {
  console.log("HELLO " + name);
}
```

### Closure

Scopes that enclose outer scoped variables (_bindings_) after an outer scoped has finished executing.

```js
function outer() {
  let outerVar = "outer";

  return function inner() {
    console.log(outerVar);
  };
}

let inner = outer();
inner(); // "outer"
```

### Recursion

Function that calls itself 😕

```js
function isEven(num) {
  if (num == 1) {
    return false;
  } else if (num == 0) {
    return true;
  } else {
    return isEven(num - 2);
  }
}
```
