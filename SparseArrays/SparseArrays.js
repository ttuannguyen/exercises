const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

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

matchingStrings(strings, queries);
