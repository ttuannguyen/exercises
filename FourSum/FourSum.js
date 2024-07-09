// Approach 1: Using nested loops and 2-pointer technique
// Time complexity: O(n^3)
function fourSum(arr, target) {
    arr.sort((a, b) => a - b); // O(nlogn)

    for (let i = 0; i < arr.length - 3; i++) { // O(n)
        for (let j = i + 1; j < arr.length - 2; j++) { // O(n)
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
// Sort the array
// Create a hash map: set sums as keys and pairs (e.g. [a, b]) as values
// Iterate through the array to find quadruplets using a nested loop (2 for loops):
    // Complement = total - sum of 2 pairs
    // If hash map has the complement
    // If yes, iterate through the hash map and retrieve the list of pairs in the hash map
    // Deconstruct that pair into indices
    // Put a condition to ensure indices are in increasing order to avoid overlap

function fourSum2(arr, target) {
    let n = arr.length;
    let map = new Map();

    // Add key-value pairs
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum = arr[i] + arr[j];
            if (!map.has(sum)) {
                map.set(sum, [i, j])
            }
        }
    }

    for (let i = 0; i < n - 1; i++) {
        
    }

    console.log(map);

}

const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const target = 20;
console.log(fourSum2(arr, target));
