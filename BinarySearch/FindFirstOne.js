/* 
Problem statement:
Let's say we have an array that consists of 0s and 1s, and you are guaranteed that all 0s appear before all 1s. 
For example, arrays like [0, 0, 1, 1, 1], [1, 1, 1], and [0, 0, 0, 0] are valid, while [1, 0], [0, 1, 0, 1] are not valid. 
In this problem, we want to find the first index of the array that is a 1. If no elements are 1, then return -1.
*/


// Approach: This is a classic binary search problem
function findFirstOne(arr) {
    let n = arr.length;

    // Edge cases:
    if (arr[0] === 1) {
        return 1;
    }

    if (arr[n - 1] === 0) {
        return -1;
    }

    let lo = 0;
    let hi = n - 1;

    while(lo + 1 < hi) { // loop invariant: array[lo] = 0, array[hi] = 1
        // re: the above condition
        // when lo + 1 = hi => lo & hi are adjacent indices
        // thus, hi is the index where we find the first 1, and bc it has a 0 immediately before 1
        // // think: finding the place where arr switches from 0 to 1 
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === 0) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return hi;   
}


const arr = [0, 0, 0, 1, 1];
let answer = findFirstOne(arr);
console.log(answer);