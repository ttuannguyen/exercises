// Approach: brute force; nested for loop
// Time complexity: O(n^2)
function matchingStrings(strings, queries) {

    let map = {};
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        
        map[queries[i]] = 0;

        for(let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                map[queries[i]]++;
            }
        }

        result.push(map[queries[i]]);
    }

    console.log(result);

    // for (let key in map) {
    //     for (let i = 0; i < strings.length; i++) {
    //         if (key === strings[i]) {
    //             map[key]++
    //         }
    //     }
    //     result.push(map[key]);
    // }

    return result;
    
}

// Approach: optimized solution with separate for loops
// Time complexity: O(n)
function matchingStrings2(strings, queries) {
    // Create a map to store the counts of each string
    let stringCounts = {};
    for (let i = 0; i < strings.length; i++) {
        if (stringCounts[strings[i]]) {
            stringCounts[strings[i]]++;
        } else {
            stringCounts[strings[i]] = 1;
        }
    }

    // Create the result array by looking up the counts for each query
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(stringCounts[queries[i]] || 0);
    }

    return result;
}


const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

matchingStrings(strings, queries);
