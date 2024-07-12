// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

// Examples:
// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i.

// Approach: binary search
function indexEqualsValueSearch2(arr) {
    if(arr.length === 0) {
        return -1;
    }
    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Re: condition above is for inclusive search range
        // i.e. when left < right, there is more one element in the search range, which can potentially be the answer; so we need left <= right
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === mid) {
            return mid;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
// Approach: brute force
function indexEqualsValueSearch1(arr) {
    for (let i = 0; i < arr.length; i++) { //O(n)
        if(arr[i] === i) {
            return i;
        }
    }
    return -1;
}


const arr = [-1,0,3,6];
console.log(indexEqualsValueSearch(arr));

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

/* Key: relationship: index & val
-8  0  2  5
 0  1  2  3
-8 -1  0  2 
*/
