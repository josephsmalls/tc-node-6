# Review 1/11/22 - JavaScript Variables and Data Types

JavaScript is an _interpreted_, _dynamically_ typed (scripting) programming language

- Dynamically typed means we do not declare variables with types
- Interpreted means that the JS engine is _intepreting_ your code for execution

## Declaration Keywords

Used to create (declare) new variables in our programs

- `var`, can be re-assigned, can be re-declared
- `let`, can be re-assigned, cannot be re-declared
- `const`, cannot be re-assigned, cannot be re-declared

```js
let firstname;
```

## Assigning a Value to a Variable

Use the `=` operator to assign a value to a variable

```js
firstname = "Ben";
```

## Variable Initialization

Declaring and assigning a value to a variable

```js
let firstname = "Ben";
```

## Data Types

### Primitive Data Types

- **Boolean**, `true` or `false`, logical data type
- **Undefined**, `undefined`, absence of a value
- **Null**, `null`, invalid or non existent value
- **Number**, `3` or `3.1427`, any number
- **String**, `"text"` or `'text'`, any text
  - **Template String**, `\`text with ${placeholders}`\` any text
- **BigInt**, `21358912705314550918n`, large numbers represented with arbitrary precision format
- **Symbol**, `Symbol("unique")`, unique value that is used as keys on objects

### Structural Data Types

- Objects
  - Functions\*

## Concatenation

Combining strings with the `+` operator

```js
"Frodo" + " " + "Baggins"; // "Frodo Baggins"
```

## Logging

Use `console.log()` to print code to the browser console (dev tools)
