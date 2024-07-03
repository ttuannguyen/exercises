const threeSum = (array, target) => {
    let result = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        console.log(complement);
        
        let j = i + 1;
        let k = array.length - i - 1;

        while (j < k) {
            if (array[j] + array[k] === complement) {
                result.push(array[i], array[j], array[k]);
                return result;
            }
            j++;
            k--;
        }
    }
    return null;
}

// Example usage
const array = [1, 4, 6, 2, 3];
const target = 9;
console.log(threeSum(array, target)); // Output: [1, 2, 6]