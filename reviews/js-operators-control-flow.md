# Review 1/12/22 - JavaScript Operators and Control Flow

## Type Coercion

Is the ability to change values from one type to another, typically to complete an operation.

## Operators

- Unary, one operand with one operator
- Binary, two operands with one operator
- Ternary, conditional operator

### Arithmetic

| Symbol | Desc                        |
| ------ | --------------------------- |
| `+`    | addition                    |
| `-`    | subtration                  |
| `*`    | multiplication              |
| `/`    | division                    |
| `%`    | modulus, division remainder |
| `**`   | exponentiation              |

### Logical

| Symbol | Desc                                                     |
| ------ | -------------------------------------------------------- |
| `&&`   | AND, both expressions must be `true` to result in `true` |
| `\|\|` | OR, one expression must be `true` to result in `true`    |
| `\|\|` | OR, one expression must be `true` to result in `true`    |
| `!`    | NOT, negate the following value                          |

### Assignment

| Symbol | Desc                           |
| ------ | ------------------------------ |
| `=`    | assignment                     |
| `+=`   | addtion then assignment        |
| `-=`   | subtration then assignment     |
| `*=`   | multiplication then assignment |
| `/=`   | division then assignment       |
| `%=`   | mod then assignment            |
| `**=`  | exponentiation then assignment |
| `++`   | increment by 1 then assignment |
| `--`   | decrement by 1 then assignment |

### Comparison

| Symbol | Desc                  |
| ------ | --------------------- |
| `==`   | loose equality        |
| `!=`   | loose inequality      |
| `===`  | strict equality       |
| `!==`  | strict inequality     |
| `>`    | greater than          |
| `>=`   | greater than or equal |
| `<`    | lesser than           |
| `<=`   | lesser than or equal  |

## Control Flow

### If/Else Statements

Parts

- `if`
- `(conditional)`
- `else`

Ex:

```js
if (skyColor == "blue") {
  // do something if condition is true
} else {
  // sky is not blue
}
```

### Switch Case

Parts

- `switch` keyword
- `(expression)`
- `{ /* switch block */ }`
- `case value:`
- `break`
- `default:`

Ex:

```js
switch (skyColor) {
  case "blue":
    // sky is blue
    break;
  case "gray":
    // sky is gray
    break;
  case "purple":
    // sky is twilight
    break;
  default:
  // sky is not blue, gray, or purple
}
```
