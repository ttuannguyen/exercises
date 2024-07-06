/* 
Problem statement
Given a sorted array, find the index of the first element ≥ X (return -1 if no element ≥ X).
Hint: consider loop invariants array[lo] < X and array[hi] >= X
*/

function lowerBound(array, x) {
    let n = array.length;
    
    if (array[n] < x) {
        return -1;
    }

    if (array[0] >=  x) {
        return 0;
    }


    console.log(array, x);
}


const array = [1, 2, 4, 6, 8];
const x = 5;
let answer = lowerBound(array, x);
console.log(answer);