// Note: This technique works efficiently with sorted arrays
// So in JS, we can use the .sort() method and execute the 2-pointer technique
// This technique is used in binary search

// Basic traversal set up
function twoPointerTraverse(arr) {
    // Goal: reverse the array, see operation part below
    let i = 0;
    let j = arr.length-1;

    while (i < j) {
        // Log the values of arr[i] and arr[j] before swapping
        // console.log(`Before swap: arr[${i}] = ${arr[i]}, arr[${j}] = ${arr[j]}`);

        // operation at each iteration 
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Log the values of arr[i] and arr[j] after swapping
        // console.log(`After swap: arr[${i}] = ${arr[i]}, arr[${j}] = ${arr[j]}`);

        i++; // increasing left, moving towards the right
        j--; // decreasing right, moving towards the left
    }

    console.log(arr);
} 


// Example: TwoSum using pointer method
const twoSum = (arr, target) =>{
    // set up the pointers at 2 opposite ends
    // direction: traversing from 2 ends to the center
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++; // increasing left, moving towards the right
        } else {
            right--; // decreasing right, moving towards the left
        }
    }

    return null; // if no such pair exists
}

// Note: input is sorted
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 10;


 twoPointerTraverse(arr);

// let answer = twoSum(arr, target);
// console.log(answer);