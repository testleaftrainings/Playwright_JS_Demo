// Approach 1:

// Initializing a variable 'word' with the string 'hello'
let word = 'hello'

// Initializing an empty string 'rev' to store the reversed word
let rev = '';

// Looping through each character of the word in reverse order
for (let i = word.length - 1; i >= 0; i--) {
    // Concatenating each character to the 'rev' variable
    rev = rev + word[i];
}

// Printing the reversed word to the console
console.log(rev)

console.log('-----------------------------')

// Approach 2:

// Splitting the word into an array of characters
let split = word.split("")
console.log(split)

// Reversing the array of characters
let reverseArray = split.reverse()
console.log(reverseArray)

// Joining the reversed array back into a string
let join = reverseArray.join("")
console.log(join)

console.log("-------------------------")




