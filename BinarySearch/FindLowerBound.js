/* 
Problem statement
Given a sorted array, find the index of the first element ≥ X (return -1 if no element ≥ X).
Hint: consider loop invariants array[lo] < X and array[hi] >= X
*/

function lowerBound(array, x) {
    let n = array.length;
    
    if (array[n-1] < x) {
        return -1;
    }

    if (array[0] >=  x) { 
        return 0; // the 1st element is already the lower bound
    }

    let lo = 0;
    let hi = n - 1;

    while (lo + 1 < hi) { // loop invariant: array[lo] < X and array[hi] >= X
     // The above also ensures that there is at least 1 element between lo and hi    
     // The loop continues as long as the difference between lo and hi is greater than 1
     let mid = Math.floor((lo + hi)/ 2);
     if (array[mid] < x) {
        // If the element at mid is less than x, update lo to mid because the lower bound must be to the right of mid
        lo = mid;
     } else {
        hi = mid; 
     }
    }
    return hi;
    
}


const array = [1, 2, 4, 6, 8];
const x = 5;
let answer = lowerBound(array, x);
console.log(answer);


/*  Learning Notes
Let's see how this maintains the invariant:

Case 1: array[mid] < X

If the value at array[mid] is less than X, then mid is too low to be the lower bound.
We set lo = mid.
Since array[mid] < X and mid is now the new lo, the invariant array[lo] < X is maintained.
Case 2: array[mid] >= X

If the value at array[mid] is greater than or equal to X, then mid could be the lower bound or it is to the left of mid.
We set hi = mid.
Since array[mid] >= X and mid is now the new hi, the invariant array[hi] >= X is maintained.
Loop Termination
The loop continues until lo + 1 >= hi, at which point lo and hi are adjacent. Due to the invariant, we know:

array[lo] < X
array[hi] >= X
Since hi is the smallest index for which array[hi] >= X, hi is the correct index to return as the position of the first element greater than or equal to X.

Example Walkthrough
Let's walk through an example with array = [1, 2, 4, 6, 8] and X = 5:

Initial state: lo = 0, hi = 4

array[lo] = 1, array[hi] = 8
Invariant to establish: array[lo] < 5 and array[hi] >= 5
First iteration:

mid = Math.floor((0 + 4) / 2) = 2
array[mid] = 4
Since 4 < 5, update lo = mid = 2
Now lo = 2, hi = 4
Invariant holds: array[lo] = 4 < 5 and array[hi] = 8 >= 5
Second iteration:

mid = Math.floor((2 + 4) / 2) = 3
array[mid] = 6
Since 6 >= 5, update hi = mid = 3
Now lo = 2, hi = 3
Invariant holds: array[lo] = 4 < 5 and array[hi] = 6 >= 5
Termination:

The loop exits because lo + 1 >= hi
lo = 2, hi = 3
Invariant: array[lo] = 4 < 5 and array[hi] = 6 >= 5
Return hi = 3
Thus, the function correctly identifies index 3 as the first element greater than or equal to 5.

*/