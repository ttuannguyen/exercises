const twoSum = (nums, target) => {
  // Approach: brute force
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }


  // Approach: hash table
  

  return result;
};

const nums = [3, 2, 4];
const target = 6;

let answer = twoSum(nums, target);
console.log(answer);
