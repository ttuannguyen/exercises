// Approach: Leverage .includes method in JS
function diff2(arrA, arrB) {
    let result = [];

    // Check if each item in arrA is not in arrB
    for (let i = 0; i < arrA.length; i++) {
        if (!arrB.includes(arrA[i])) {
            result.push(arrA[i]);
        }
    }

    // Check if each item in arrB is not in arrA
    for (let i = 0; i < arrB.length; i++) {
        if (!arrA.includes(arrB[i])) {
            result.push(arrB[i]);
        }
    }

    return(result);

}


// Approach: Brute force
// Build a hash table
// 1st pass: iterate through the 1st array and populate map with initial numbers
// 2nd pass: create a set from the 2nd array, iterate through it and market the duplicates
function diff1(arrA, arrB) {
    // your code goes here
    let map = {};

    for (let i = 0; i < arrA.length; i++) {
        map[arrA[i]] = 0;
    }

    let arrBSet = new Set(arrB); // to clear duplicates in the 2nd arr

    for (const num of arrBSet) { // forEach will also work for iterating through a Set
        if (map[num] !== undefined) {
            map[num]++;
        } else {
            map[num] = 0;
        }
    }
    // console.log(map);

    let result = [];

    for (const num in map) {
        if (map[num] === 0) {
            result.push(parseInt(num));
        }
    }

    return result;
}

// debug your code below
console.log(diff2([1, 2, 3, 4], [3, 4, 5, 6]));