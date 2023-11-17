// Define an array with some values
const arr = [1, 3, 4, 3, 2, 4, 7, 6, 7];

// Outer loop to iterate through each element in the array
for (let i = 0; i <= arr.length; i++) {

    // Inner loop to compare the current element with the rest of the elements in the array
    for (let j = i + 1; j <= arr.length; j++) {

        // Check if the current element at index i is equal to any subsequent element at index j
        if (arr[i] == arr[j]) {

            // If equal, print the duplicate value to the console
            console.log(arr[i]);
        }
    }
}
