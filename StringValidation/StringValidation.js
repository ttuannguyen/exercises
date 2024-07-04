// . => separating the numbers
// loop through the string and put the 4 numbers into an array
// loop through the array and verify that each number is in the range: 0 - 255

function validateIPAddress(ip) {
    let arr = [];
    let str = '';

    // let i = 0;
    // let n = ip.length -1;
    // while (i < n) {
    //     //
    // }

    for (let i = 0; i < ip.length - 1; i++) {
        if(ip[i] !== '.') {
            str += ip[i];
        } else {
            arr.push(parseInt(str));
            str = '';
        }
    }

    // we need to capture reminder of string

    console.log(arr);

}


const ip = '192.168.0.1';
validateIPAddress(ip);