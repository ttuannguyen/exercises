// Objective: merge the 2 sorted arrays below:
// Approach: Using 2-pointer technique
// Practice: Thinking of how the pointers traverse

function merge() {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) { // loop runs as long as neither pointer has reached the end of its respective array
        if (left[i] < right[j]) { 
            result.push(left[i]);
            i++; 
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array
    if (i < left.length) {
        result.push(left[i]);
        j++;
    }

    // If there are remaining elements in the left array
    if (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;

    /* 
    Total Space Complexity:
        Let n be the length of the left array.
        Let m be the length of the right array.
        The size of the result array will be n+m.
        Thus, the space complexity of the merge function, including the space used by the result array, is O(n + m).
    */
}

const left = [ 1, 2, 5, 6, 44, 99 ];
const right = [ 0, 4, 63, 87, 283 ];
merge(left, right);






// Note: In this case it is very ineffective to use the nested for loop; 
// for (let i = 0; i < left.length; i++) {
//     for (let j = 0; j < right.length; j++) {
//         console.log(left[i], right[j], result);

//         if (left[i]) {
//             if (left[i] < right[j]) {
//                 result.push(left[i]);
//                 i++;
//             } 
//             else {
//                 if(!result.includes(right[j])) {
//                     result.push(right[j]);
//                 }
//             }
//         } 
//     }
// }


// We'd still have to turn the for loop into something like while loop like below
// let result = [];
// let i = 0, j = 0;

// for (; i < left.length && j < right.length;) {
//     if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//     } else {
//         result.push(right[j]);
//         j++;
//     }
// }

// // If there are remaining elements in the left array, add them to result
// for (; i < left.length; i++) {
//     result.push(left[i]);
// }

// // If there are remaining elements in the right array, add them to result
// for (; j < right.length; j++) {
//     result.push(right[j]);
// }

// console.log(result);