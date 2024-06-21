// Objective: Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Hint: Kadane’s algorithm 
// Reference: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

const nums = [-2,1,-3,4,-1,2,1,-5,4];

const findMaxSubarray = () => {
    if (nums.length === 0) return [];

    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    let start = 0; end = 0; tempStart = 0;

    for  (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxEndingHere + nums[i]) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere += nums[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return nums.slice(start, end + 1);
}

const result = findMaxSubarray(nums);
console.log(result);
