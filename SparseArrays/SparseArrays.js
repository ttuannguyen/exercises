const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

function matchingStrings(strings, queries) {

    let map = {};
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        if (!map[queries[i]]) {
            map[queries[i]] = 0;
        }

        for(let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                map[queries[i]]++;
            }
        }
    
    }

    // for (let key in map) {
    //     for (let i = 0; i < strings.length; i++) {
    //         if (key === strings[i]) {
    //             map[key]++
    //         }
    //     }
    //     result.push(map[key]);
    // }

    // console.log(result);
    return result;
    
}

matchingStrings(strings, queries);