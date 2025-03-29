// Problem statement: Find the maximum sum of 3 contiguous elements in an array

function maxSumSubarray(nums, k) {
    let maxSum = 0;
    let currentSum = nums.slice(0, k).reduce((num, sum) => num + sum, 0);
    maxSum = currentSum;
    // console.log(maxSum);

    for (let i = 0; i < nums.length - k; i++) {
        currentSum = currentSum - nums[i] + nums[i+k];
        maxSum = Math.max(...[currentSum, maxSum]);
    }

    return maxSum;
}


const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(maxSumSubarray(nums, k));

// Notes:
// JS array methods to keep in mind: 
// .slice(start index, end index (exclusive)) for extracting part of the array
// .reduce((a, b) => a + b, 0)
// Math.max(...[num1, num2]) for finding the max value