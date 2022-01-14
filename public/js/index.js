console.log("Hello World!");

// Given a tax rate and subtotal returns the total price amount
function calcTotal(subtotal, taxRate) {
  let tax = subtotal * taxRate;
  return subtotal + tax;
}

console.log(calcTotal(10, 0.1));
console.log(calcTotal(22, 0.15));
console.log(calcTotal(5, 0.20));
