// Given an array of integers, where all elements but one occur twice, find the unique element.


function lonelyinteger(a) {
    
    if (a.length === 1) {
        return a[0];
    } 
    
    // Method: hash table approach
    let map = {};
    for (let i = 0; i < a.length; i++) {
        if(map[a[i]]) {
            map[a[i]]++; // unpack this logic
        } else {
            map[a[i]] = 1;
        }
    }
    console.log(map);

    
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