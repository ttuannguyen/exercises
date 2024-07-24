// Approach: Using a Set
function getDifferentNumber2(arr) {
    let set = new Set(arr);
    for (let i = 0; i <= arr.length; i++) { // O(n)
        // i <= arr.length bc we need to consider the last element might be in the loop
        if (!set.has(i)) { // constant time look up (i.e. O(n))
            return i;
        }
    }
    return arr.length;
}

// Approach: Brute force
function getDifferentNumber1(arr) {
    let sortedArr = arr.sort(); // O (n*log(n))
    console.log(sortedArr);
    
    // edge cases
    if (sortedArr[0] !== 0) return 0;
    if (sortedArr[1] !== 1) return 1;


    for (let i = 0; i <= sortedArr.length; i++) {
        // console.log(sortedArr[i]);
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
}
  
// debug your code below
const arr = [0, 2, 1, 3, 5];
console.log(getDifferentNumber2(arr));