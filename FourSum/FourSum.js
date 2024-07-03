function fourSum(arr, target) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            let complement = target - arr[i] - arr[j];

            let left = i + 1;
            let right = arr.length-1;

            while (left < right) {
                if (arr[left] + arr[right] === complement) {
                    return [arr[i], arr[j], arr[left], arr[right]];
                } else if (arr[left] + arr[right] < complement) {
                    left++;
                } else {
                    right--;
                }
            } 
        }
    }
    return null;
}

const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const target = 20;
console.log(fourSum(arr, target));
