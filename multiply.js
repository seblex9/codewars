// This code does not execute properly. Try to figure out why.
function multiply(a, b) {
  a * b;
}

// solution
function multiply(a, b) {
  return a * b;
}

// refactor
multiply = (a, b) => a * b;

// tests
multiply(1, 1); // 1;
multiply(2, 1); // 2;
multiply(2, 2); // 4;
multiply(3, 5); // 15;
