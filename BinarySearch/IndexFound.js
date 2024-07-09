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
        let mid = Math.floor((low + high) / 2);
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