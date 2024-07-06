// maximize profit: find 2 cities with the largest diff in prices (i.e. highest and lowest)
// output: array containing city names (keys)


// Brute force approach:
// Break into 2 problems: Find the lowest price and highest price 
// Turn obj into an arr
// Sort the arr, find max and min value
// Look up the city of the max and min value
// Return a new array with those names

function maxProfit(prices) {
    // your code goes here

    let arr = [];

    for (const city in prices) {
        arr.push(prices[city]);
    }

    arr.sort();

    const lowest = Object.keys(prices).find(key => prices[key] === arr[0]); 
    const highest = Object.keys(prices).find(key => prices[key] === arr[arr.length - 1]);

    return [lowest, highest];


}

// debug your code below
const prices = {'London': 72, 'New York': 70, 'Tokyo': 67, 'Miami': 62};
console.log(maxProfit(prices));