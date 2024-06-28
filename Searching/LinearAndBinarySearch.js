// LINEAR SEARCH
// Best case: O(1); worst case: O(n)

const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

beasts.indexOf("Godzilla");

beasts.findIndex((item) => {
    return item === "Godzilla";
});

beasts.find((item) => {
    return item === "Godzilla";
});

beasts.includes("Godzilla");

console.log(answer);

// BINARY SEARCH
// Good if the list is already sorted
// We're essentially creating a binary search tree for a divide and conquer approach; log O(n)
// You split a list over sorted items and decide from there whether an item is to the left or right 
// Storing data in a DS like a tree instead of an array is actually more efficient