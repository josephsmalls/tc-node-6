console.log("JavaScript Functions");

// Closure is scope keeping the binding (reference) of an outer scope value, after the outer scope no longer exists

function count(initialValue) {
  let value = initialValue;
  return function counter(increment) {
    return value + increment;
  };
}

let counter = count(50);

console.log(counter(1)); // 51
console.log(counter(10)); // 60
console.log(counter(30)); // 80
