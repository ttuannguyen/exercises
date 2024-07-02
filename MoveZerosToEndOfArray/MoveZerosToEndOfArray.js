// Move 0s to the end 
// Create an empty array
// Loop through the arr, find 0s
// At each 0, use .pop() method to remove it, and .push() method to add the 0 to the end

function moveZerosToEnd(arr) {
    // your code goes here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1); // removing the element from the array O(n) bc it needs to shift all subsequent elements in worse case
            arr.push(0); // O(1)
        }
    }

    return arr;
}

// debug your code below
console.log(moveZerosToEnd([0, 1, 0, 3, 12]))