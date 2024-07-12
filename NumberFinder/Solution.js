function findFirst(array, num) {
    let n = array.length;   
    console.log(n);
    
    if (n === 0) {
        return -1;
    }

    if (array[0] === num) {
        return 0;
    }
    
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === num) {
            return mid;
        } else if (array[mid] < num) {
            left = mid + 1; // We move the low pointer to mid + 1 to search in the right half of the array. This excludes the left half, including the middle element.
        } else {
            right = mid - 1; // We adjust the high pointer to mid - 1 to search in the left half of the array. This excludes the right half, including the middle element.
        }
    }

    return -1;
}

// debug your code below   
console.log(findFirst([200, 200, 200, 200, 500, 500, 500], 500));