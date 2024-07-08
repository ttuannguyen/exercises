// Move 0s to the end 
// Create an empty array
// Loop through the arr, find 0s
// At each 0, use .pop() method to remove it, and .push() method to add the 0 to the end

// Approach 1: brute force
// Time complexity: O(n^2)
function moveZerosToEnd(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] === 0) {
            arr.splice(i, 1); // O(n) removing the element from the array O(n) bc it needs to shift all subsequent elements in worse case
            // Note on splice: .splice(index, deleteCount)
            arr.push(0); // O(1)
        }
    }
    return arr;
}

// Approach 2: two-pointer techniquw
// Side note: normally a useful technique for efficiently working with sorted arrays
// in this case it's not sorted but it also works well, we just need to move in the direction towards 1 end
// Time complexity: O(1 + n + n) => O(1 + 2n) => O(n)

// [0, 1, 0, 3, 12] // given OG arr
//  L  R 
// [0, 1, 0, 3, 12]

function moveZerosToEnd2(arr) {
    let nonZeroIndex = 0; // O(1)

    // 1st pass: move all non-zero elements to the beginning of the array
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    
    console.log(arr.length); // Note: at this point, we still have the same size of the input

    // 2nd pass: fill the remaining positions with 0;
    for (let i = nonZeroIndex; i < arr.length; i++) { // O(n)
        arr[i] = 0;    
    }

    return arr;
}

// debug your code below
console.log(moveZerosToEnd2([0, 1, 0, 3, 12]))

/* Learning Notes
Pointer Initialization:

We use a variable nonZeroIndex to act as a pointer. This pointer keeps track of the position where the next non-zero element should be placed.
Initially, nonZeroIndex is set to 0.

First Pass (Non-Zero Placement):
We iterate through the array with the loop variable i acting as the second pointer!!
For each element in the array, we check if it is non-zero.
If the element is non-zero, we place it at the nonZeroIndex position and increment nonZeroIndex.
This effectively moves all non-zero elements to the front of the array while maintaining their relative order.

Diagram for First Pass:
Initial array: [0, 1, 0, 3, 12]

Step-by-step iteration:
i = 0, arr[i] = 0, nonZeroIndex = 0 --> No change (array: [0, 1, 0, 3, 12])
i = 1, arr[i] = 1, nonZeroIndex = 0 --> Place 1 at index 0 (array: [1, 1, 0, 3, 12]), nonZeroIndex++
i = 2, arr[i] = 0, nonZeroIndex = 1 --> No change (array: [1, 1, 0, 3, 12])
i = 3, arr[i] = 3, nonZeroIndex = 1 --> Place 3 at index 1 (array: [1, 3, 0, 3, 12]), nonZeroIndex++
i = 4, arr[i] = 12, nonZeroIndex = 2 --> Place 12 at index 2 (array: [1, 3, 12, 3, 12]), nonZeroIndex++

Second Pass (Filling Zeros):
After the first pass, nonZeroIndex points to the position where the first zero should be placed.
We use another loop with the pointer i starting from nonZeroIndex to the end of the array.
In this loop, we set each element to zero.
Diagram for Second Pass:
Array after first pass: [1, 3, 12, 3, 12]

Step-by-step iteration:
i = 3, nonZeroIndex = 3 --> Place 0 at index 3 (array: [1, 3, 12, 0, 12])
i = 4, nonZeroIndex = 4 --> Place 0 at index 4 (array: [1, 3, 12, 0, 0])

*/