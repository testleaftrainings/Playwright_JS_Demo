// Function to reverse a given string
function reverseString(str) {
  // Initialize an empty string to store the reversed characters
  let reverse = '';
  
  // Iterate through the characters of the input string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
      // Concatenate each character to the reversed string
      reverse = reverse + str[i];
  }
  
  // Return the reversed string
  return reverse;
}

// Original string to be reversed
const originalString = 'Hello, Testleaf!';
// Call the reverseString function and store the result in reversedString
const reversedString = reverseString(originalString);

// Display the reversed string in the console
console.log(reversedString);

  