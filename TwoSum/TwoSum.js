const twoSum = (nums, target) => {
  let result = [];

  // Approach 1: brute force
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       result.push(i, j);
  //     }
  //   }
  // }


  // Approach 2: hash table
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in map) {
      result.push(map[complement], i);      
    } else {
      map[nums[i]] = i; // note: remember bracket notation
    }
  }

  return result;
};

const nums = [2,7,11,15];
const target = 9;

let answer = twoSum(nums, target);
console.log(answer);
