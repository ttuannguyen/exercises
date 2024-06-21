// Objective: Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Hint: Kadane’s algorithm 

const nums = [-2,1,-3,4,-1,2,1,-5,4];

const findMaxSubarray = () => {
    if (nums.length === 0) return 0;

    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for  (let i = 0; i < nums.length; i++) {
        maxEndingHere = maxEndingHere + nums[i];
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
}

findMaxSubarray(nums);
