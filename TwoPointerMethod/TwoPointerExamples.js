// Example: TwoSum using pointer method
const twoSum = (arr, target) =>{
    // set up at 2 different ends for this purpose
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // if not such pair exists
}

// Note: input is sorted; 2 pointer works efficiently 
const arr = [1, 2, 3, 4, 6, 8, 9];
const target = 10;

let answer = twoSum(arr, target);
console.log(answer);