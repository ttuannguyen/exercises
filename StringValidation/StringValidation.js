// . => separating the numbers
// loop through the string and put the 4 numbers into an array
// loop through the array and verify that each number is in the range: 0 - 255

function validateIPAddress(ip) {
    let stringArray = ip.split(".");
    let numArray = stringArray.map(Number); // O(n)

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


const ip = '192.168.123.456';
console.log(validateIPAddress(ip));