// Function to find two numbers in an array that add up to a given target
function twoSum(nums, target) {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
      // Nested loop to compare the current element with the rest of the elements
      for (let j = i + 1; j < nums.length; j++) {
        // Check if the sum of the current pair of elements equals the target
        if (nums[i] + nums[j] === target) {
          // If a pair is found, return the indices of the two numbers
          return [i, j];
        }
      }
    }
    // If no solution is found, return null
    return null;
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  // Call the twoSum function with the provided array and target
  const result = twoSum(nums, target);
  
  // Check if a solution was found
  if (result !== null) {
    // Destructure the result array to get the indices of the two numbers
    const [index1, index2] = result;
    // Print the indices of the two numbers
    console.log(`Indices of the two numbers: ${index1}, ${index2}`);
  } else {
    // If no solution is found, print a message
    console.log("No solution found.");
  }
  