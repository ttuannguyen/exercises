// Given an array of integers, where all elements but one occur twice, find the unique element.


function lonelyinteger(a) {
    
    if (a.length === 1) {
        return a[0];
    } 
    
    // Method: hash table approach
    let map = {};
    for (let i = 0; i < a.length; i++) {
        if(map[a[i]]) {
            map[a[i]]++; // if this key already exists, increment the value by one
        } else {
            map[a[i]] = 1; // if not, assign 1 to the value of the new key
        }
    }

    for (let key in map) {
        if(map[key] === 1) {
            return parseInt(key);
            // return key; // this will also work but since we're explicitly asked to return an integer, using partseInt in the above is a stronger solution
        }
    }

    // // Method: For loop approach; flawed
    // for (let i = 0; i < a.length; i++) {
    //     let counter = 0;
    //     for (let j = i + 1; j < a.length; j++) {
    //         // console.log(a[i], a[j]);
    //         if (a[i] === a[j]) {
    //             counter++;
    //         }
    //         // console.log("counter: " + counter);
    //     }
    //     if (counter === 0) {
    //         return a[i];
    //     }
    // }

    return undefined;
}

const a = [1,2,3,4,3,2,1]

const answer = lonelyinteger(a);
console.log(answer);