// Given array
const arr = [1, 3, 4, 3, 2, 4, 7, 6, 7];
 
// Sorting the array in ascending order
const sort = arr.sort();
 
// Loop through the sorted array
for (let i = 0; i <= sort.length; i++) {
    // Check if the current element is equal to the next element
    if (sort[i] == sort[i + 1]) {
        // If true, there is a duplicate, so log the duplicate element
        console.log(sort[i]);
    }
}
