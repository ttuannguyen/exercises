const threeSum = (arr, target) => {
  arr.sort((a, b) => a - b); // remember syntax for sorting

  let result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    // condition to note: 'arr.length - 2' ensures there are at least 2 remaining elements in the array to form a triplet
    
    // set up the 2 pointers
    let left = i + 1; // error fixed
    let right = arr.length - 1;

    // establish the complement
    const complement = target - arr[i];

    while (left < right) {
      if (arr[left] + arr[right] === complement) {
        result.push(arr[i], arr[left], arr[right]);
        return result;
      } else if (arr[left] + arr[right] < complement) {
        left++;
      } else {
        right--; // error fixed
      }
    }
  }

  return null;
};

// Example usage
const arr = [1, 4, 6, 2, 3];
const target = 9;
console.log(threeSum(arr, target));


// Things to note:
// (1) Ensure proper implementation of JS .sort() method
// (2) Ensure proper setup of the pointers
// (3) Ensure proper moving of the poiters