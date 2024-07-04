// . => separating the numbers
// loop through the string and put the 4 numbers into an array
// loop through the array and verify that each number is in the range: 0 - 255

// Flawed; impproved solution beloiw
function validateIPAddress(ip) {
    let stringArray = ip.split(".");
    let numArray = stringArray.map(Number); // O(n)
    console.log(numArray);

    // Edge cases
    if (numArray.length !== 4) {
        return false;
    }

    if (numArray.includes('')) {
        return false;
    }

    for (let i = 0; i < numArray.length; i++) { // O(n)
        if(!(numArray[i] >= 0 && numArray[i] <= 255)) {
            return false; 
        }
    }

    return true;

    // Approach: Manually split the string using for loop
    // let arr = [];
    // let str = '';
    // for (let i = 0; i < ip.length; i++) {
    //     if(ip[i] !== '.') {
    //         str += ip[i];
    //     } else {
    //         arr.push(parseInt(str));
    //         str = ''; 
    //         // this resets string but will the the loop will still go on and the above "if" condition will still capture characters
    //         // at the end of of the loop, str will hold the rest of the characters
    //     }
    // }
    // // capture reminder of string in arr
    // arr.push(parseInt(str));

}

function validateIPAddress2(ip) {
    let stringArray = ip.split(".");
    
    // Check if the IP address has exactly four segments
    if (stringArray.length !== 4) {
        return false;
    }

    for (let i = 0; i < stringArray.length; i++) {
        // Check if each segment is a valid number
        if (!/^\d+$/.test(stringArray[i])) {
            return false;
        }

        let num = Number(stringArray[i]);

        // Check if each number is in the range 0-255 and has no leading zeros unless it's "0"
        if (num < 0 || num > 255 || (stringArray[i].length > 1 && stringArray[i].startsWith('0'))) {
            return false;
        }
    }

    return true;
}

const ip = '192.168.0.1';
console.log(validateIPAddress2(ip));