const input = [2, 3, 5, 6, 3, 2, 1, 4, 2, 1, 6, -1];
const count = new Map();

// Iterate through each index of the 'input' array using a for loop
for (let i = 0; i < input.length; i++) {
    // Get the current element at the current index
    const num = input[i];
    
    // Check if the 'count' Map has the current number as a key
    if (!count.has(num)) {
        // If not, set it to 1
        count.set(num, 1);
    } else {
        // If yes, increment the existing count
        count.set(num, count.get(num) + 1);
    }
}

// Print the final count Map to the console
console.log(count);