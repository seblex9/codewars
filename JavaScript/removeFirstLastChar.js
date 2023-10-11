// Create a function that removes the first and last characters of a string.
function removeChar(str) {
  const newStr = str.split('');
  newStr.shift();
  newStr.pop();
  return newStr.join('');
}
