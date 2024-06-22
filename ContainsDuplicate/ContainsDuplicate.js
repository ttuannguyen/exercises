// Objective: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1: Input: nums = [1,2,3,1]; Output: true

const containsDuplicate = () => {
    const map = {};

    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return true;
        } else {
            map[input[i]] = i + 1; // we don't want to assign 0 as key because 0 is falsy in JS
        }
        // console.log(map[input[i]]);
    }
    return false;
}

const input = [1,2,3,1];

const answer = containsDuplicate(input);
console.log(answer);
