const threeSum = (array, target) => {
    let result = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 2; i++) {
        // condition i < array.length - 2 ensures that there are at least 2 more elements to the right to form a triplet

        let complement = target - array[i];
        
        let left = i + 1;
        let right = array.length - 1;
        // note: we should only 
            // increment left to the sum is less than the complement
            // decrement right to the sum is more than the complement

        while (left < right) {
            if (array[left] + array[right] === complement) {
                result.push(array[i], array[left], array[right]);
                return result;
            } else if (array[left] + array[right] < complement) {
                left++;
            } else {
                right--;
            }
        }
    }
    return null;
}

// Example usage
const array = [4, 6, 5, 1, 2, 3];
const target = 12;
console.log(threeSum(array, target)); 