// Approach 1: Using nested loops and 2-pointer technique
// Time complexity: O(n^3)
// Space complexity: O(1)
function fourSum(arr, target) {
    let n = arr.length;
    arr.sort((a, b) => a - b); // O(n log n)

    for (let i = 0; i < n - 3; i++) { // O(n) 
        // n - 3: to ensure there are at least 3 elements left after i
        for (let j = i + 1; j < n - 2; j++) { // O(n)
            // n - 2: to ensure there are at least 2 elements left after j
            let complement = target - arr[i] - arr[j];

            let left = j + 1;
            let right = arr.length-1;

            while (left < right) { // O(n)
                if (arr[left] + arr[right] === complement) {
                    return [arr[i], arr[j], arr[left], arr[right]];
                } else if (arr[left] + arr[right] < complement) {
                    left++;
                } else {
                    right--;
                }
            } 
        }
    }
    return null;
}

// TODO: Approach 2: Using hash map 
// This approach actually has worse time and space complexity: 
// Time: O(n^4)
// Space: O(n^2)
// Sort the array
// Create a hash map: set sums as keys and pairs (e.g. [a, b]) as values
// Iterate through the array to find quadruplets using a nested loop (2 for loops) without 2-pointer:
    // Complement = total - sum of 2 pairs
    // If hash map has the complement
    // If yes, iterate through the hash map and retrieve the list of pairs in the hash map
    // Deconstruct that pair into indices
    // Put a condition to ensure indices are in increasing order to avoid overlap

function fourSum2(arr, target) {
    let n = arr.length;
    if (n === 0) {
        return [];
    }

    if (n < 4) {
        return [];
    }

    arr.sort((a, b) => a - b);

    let map = new Map(); // Hash map to store pairs: O(n^2) space complexity

    // Add key-value pairs
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum = arr[i] + arr[j];
            // the operation below returns all indices with the target sum
            if (!map.has(sum)) {
                map.set(sum, []);
            }
            map.get(sum).push([i, j]);
        }
    }
    console.log(map);

    for (let i = 0; i < n - 3; i++) { // In the worst case, this inner loop could iterate over O(n^2); also not great
        for (let j = i + 1; j < n - 2; j++) {
            let complement = target - arr[i] - arr[j];
            if (map.has(complement)) { // checking hash map => O(1)
                for (const pair of map.get(complement)) { // retrieving list from hash map => O(1)
                    // console.log(complement, pair)
                    const [k, l] = pair;
                    // ensure indices are unique and in increasing order
                    if (j < k) {
                        return [arr[i], arr[j], arr[k], arr[l]];
                    }
                } 
            } 
        }

    }


}

const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const target = 20;
console.log(fourSum2(arr, target));
