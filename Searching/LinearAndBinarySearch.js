// LINEAR SEARCH
// Best case: O(1); worst case: O(n)
// The following are the JS built-in methods for linear search to be aware of

const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

beasts.indexOf("Godzilla");

beasts.findIndex((item) => {
    return item === "Godzilla";
});

beasts.find((item) => {
    return item === "Godzilla";
});

beasts.includes("Godzilla");


// BINARY SEARCH
// Good if the list is already sorted
// We're essentially creating a binary search tree for a divide and conquer approach; log O(n)
// You split a list over sorted items and decide from there whether an item is to the left or right 
// Storing data in a DS like a tree instead of an array is actually more efficient

const binarySearch = (arr, target) => {
    // Goal: find the target in a given array
    let low = 0; // low is set to index 0
    let high = arr.length - 1; // // high is set to the last index

    while(low <= high) {
        
        // operation at each iteration
        let mid = Math.floor((low + high) / 2); // calculating the index that is the midpoint

        if(arr[mid] === target) { // at the midpoint index, is there value equal to target?
            return mid; 
        } else if (arr[mid] < target) { // if the value at this index is less than target, the target is in the right half
            low = mid + 1;  // we move the left-side pointer to the right 
        } else { // otherwise, target is in the left half
            high = mid - 1; // we move the right-side pointer to the left
        }
    }

    return -1; // Target not found
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found');
}
