// Approach: 
function getDifferentNumber(arr) {
    //
}

// Approach: Brute force
function getDifferentNumber(arr) {
    let sortedArr = arr.sort();
    console.log(sortedArr);
    
    // edge
    if (sortedArr[0] !== 0) return 0;
    if (sortedArr[1] !== 1) return 1;


    for (let i = 0; i < sortedArr.length; i++) {
        // console.log(sortedArr[i]);
        if (arr[i] !== i) {
            return i;
        }
    }

    return arr.length;
    
}
  
// debug your code below
const arr = [0, 2, 1, 3, 5];
console.log(getDifferentNumber(arr));