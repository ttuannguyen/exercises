const twoSum = (nums, target) => {
    
    // Approach 1: nested for loop
    // O(n^2)
    // const result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             result.push(i, j);
    //         }
    //     }
    // }
    // return result;

    // Approach 2: hash table
    // O(n)
    const map = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // The idea is if we run into a complement that is a number that we already saved, then we've arrived at our solution
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {   
            result.push(map[complement], i); // we can push multiple elements
            return result;
        } else {
            map[nums[i]] = i;
        }
    }

    // Reference: hasOwnProperty; alteratively, in-operator, i.e. "complement in map"
    // https://www.skillreactor.io/blog/javascript-check-if-key-exists/#:~:text=The%20in%2Doperator%20and%20the,from%20the%20key%20existence%20check.

    // Approach 3: hash map
    // const numIndices = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i];
    //     if (numIndices.has(complement)) {
    //         return [numIndices.get(complement), i];
    //     }
    //     numIndices.set(nums[i], i);
    // }
    // return [];
}

// Note: for sorted array, we can also use the Two Pointer method

// Note: input is unsorted
const nums = [3,2,4];
const target = 6;

let answer = twoSum(nums, target);
console.log(answer);
