function findIndexOfNumber(arr, x) {
    let n = arr.length;
    
    if (arr[0] === x) {
        return 0;
    }

    if (arr[n-1] === x) {
        return n - 1;
    }
    
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // let mid = Math.floor((low + high) / 2);
        // Correction:
        let mid = low + Math.floor((high - low) / 2);
        // Why:
        // let mid = Math.floor((5 - 2) / 2) => resulting in mid = 1 (relative to index 0)
        // Since low = 2, mid = 1 is incorrect as an index—it should be relative to low
        // let mid = 2 + Math.floor((5 - 2) / 2) => resulting in mid = 2 + 1 = 3


        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) { 
            low = mid + 1; // We move the low pointer to mid + 1 to search in the right half of the array. This excludes the left half, including the middle element.
        } else {
            high = mid - 1; // We adjust the high pointer to mid - 1 to search in the left half of the array. This excludes the right half, including the middle element.
        }
    }
    return -1; // Element not found
}


const arr = [1, 2, 4, 6, 8, 10];
const x = 8;
let answer = findIndexOfNumber(arr, x);
console.log(answer);

// Learning note:
// Keep in mind the range of the search area, make sure things are always in range (see note re: midpoint calc above)
// Math.floor() => necessary in JS when working with whole numbers

