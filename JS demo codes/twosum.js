// Function to find two numbers in an array that add up to a given target
function twoSum(nums, target) {
    const numMap = new Map();
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement by subtracting the current element from the target
        const complement = target - nums[i];
        // Check if the complement is in the map
        if (numMap.has(complement)) {
            // If the complement is found, return the index of the current element and the complement
            return [numMap.get(complement), i];
        }
        // Store the index of the current element in the map using the element as the key
        numMap.set(nums[i], i);
    }
    // If no solution is found, return null
    return null;
  }
   
  // The rest of the usage example remains the same
   
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
