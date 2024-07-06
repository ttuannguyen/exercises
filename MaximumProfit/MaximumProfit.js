// maximize profit: find 2 cities with the largest diff in prices (i.e. highest and lowest)
// output: array containing city names (keys)


// Brute force approach:
// Break into 2 problems: Find the lowest price and highest price 
// Turn obj into an arr
// Sort the arr, find max and min value
// Look up the city of the max and min value
// Return a new array with those names

function maxProfit1(prices) {
    // Time complexity: O(n)
    const cities = Object.keys(prices);
    
    if (cities.length === 0 || cities.length === 1) {
        return null;
    }

    let minCity = cities[0]; // pointing to the array of cities
    let maxCity = cities[0];
    let minPrice = prices[minCity]; // pointing to the element in the object 
    let maxPrice = prices[maxCity];

    // Iterate through the dictionary to find min/max prices and their respective cities
    for (const city in prices) { // O(n)
        console.log("Before: ", city, prices[city], "minPrice: " + minPrice, "maxPrice: " + maxPrice)
        if (prices[city] < minPrice) {
            minPrice = prices[city];
            minCity = city;
        } 
        if (prices[city] > maxPrice) {
            maxPrice = prices[city];
            maxCity = city;
        }
        console.log("After: ", "minPrice: " + minPrice, "maxPrice: " + maxPrice)
    }
    // for (let i = 1; i < cities.length; i++) {
    //     const city = cities[i];
    //     if (prices[city] < minPrice) {
    //         minPrice = prices[city];
    //         minCity = city;
    //     } 
    //     if (prices[city] > maxPrice) {
    //         maxPrice = prices[city];
    //         maxCity = city;
    //     }
    // }

    // If there is no profit to be earned, return null
    if (minPrice >= maxPrice) {
        return null;
    } 

    return [minCity, maxCity];

}

function maxProfit2(prices) {
    if (!prices || Object.keys(prices).length === 0) {
        return null;
    }

    let minCity = null;
    let maxCity = null;
    let minPrice = Infinity; // Infinity: Represents a value larger than any other number.
    let maxPrice = -Infinity; // -Infinity: Represents a value smaller than any other number.

    for (let city in prices) {
        if (prices.hasOwnProperty(city)) {
            let price = prices[city];
            if (price < minPrice) {
                minPrice = price;
                minCity = city;
            }
            if (price > maxPrice) {
                maxPrice = price;
                maxCity = city;
            }
        }
    }

    // Check if there is no profit opportunity
    if (minPrice === maxPrice) {
        return null;
    }

    return [minCity, maxCity];
}


// Brute force: trying to use built-in methods
// function maxProfit(prices) {
//     if (Object.keys(prices).length === 0 || Object.keys(prices).length === 1) {
//         return null;
//     }

//     let arr = [];

//     for (const city in prices) {
//         arr.push(prices[city]);
//     }

//     arr.sort();
//     console.log(arr);

//     const lowest = Object.keys(prices).find(key => prices[key] === arr[0]); 
//     const highest = Object.keys(prices).find(key => prices[key] === arr[arr.length - 1]);

//     return [lowest, highest];
// }

// debug your code below
const prices = {'London': -20, 'New York': 15, 'Tokyo': -10, 'Miami': 5};
console.log(maxProfit1(prices));