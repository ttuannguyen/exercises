// Approach: Using a Set
function getDifferentNumber2(arr) {
    let set = new Set(arr);
    for (let i = 0; i <= arr.length; i++) { // i <= arr.length bc ...
        if (set.has(i)) {
            console.log(i, " yes");
        } else {
            console.log(i, " no");
        }
    }
}

// Approach: Brute force
function getDifferentNumber1(arr) {
    let sortedArr = arr.sort(); // O (n*log(n))
    console.log(sortedArr);
    
    // edge
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