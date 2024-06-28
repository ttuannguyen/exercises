const num = 58; // => LVIII

const intToRoman = (num) => {

    // Approach: Switch the order of character and value in the object; and we can add 9 and 4 (since we're already building an object to use)
    // Initialize a variable to store the result
    // Use a for loop to go through each value and add the symbol
    // Use a while loop for recursion 
    // While the number is greater than or equal to the value
        // Add the symbol to result
        // Subtract the value from the number

}

intToRoman(num);


// Initial Attempt
// const intToRoman2 = (num) => {

//     let romans = {
//         'M': 1000,
//         'D': 500,
//         'C': 100,
//         'L': 50,
//         'X': 10,
//         'V': 5,
//         'I': 1,
//     }

//     let str = '';
//     let text = num.toString();
//     let remainingValues = 0;

//     if (text[0] !== '4' || text[0] !== '9') {
//         const keys = Object.keys(romans);
//         let remainder = num;
//         for (let i = 0; i < keys.length-1; i++) {
//             console.log(keys[i], romans[keys[i]], romans[keys[i]] - remainder, remainder);
//             if((romans[keys[i]] - remainder) <= 0) {
//                 if (i === keys.length-2) {
//                     // To save the remaining value at the last iteration
//                     remainingValues = -(romans[keys[i]] - remainder);
//                 }
//                 str += keys[i];
//                 remainder = num - romans[keys[i]];
//             }
            
//         }
        
//         const found = Object.keys(romans).find(key => romans[key] === 1);
//         for (let i = 0; i < remainingValues; i++) {
//             str += found;     
//         }

//     }
//     console.log(str)
//     return str;

// }