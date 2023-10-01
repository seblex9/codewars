// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// solution
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// refactor
evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
