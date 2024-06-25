const str = "XXIV";

// Approach: loop over the string numerals, check if current has a neighbor. 
// If it does, check if the neighbor's value is more than the current 
    // It it is, we've reached a case where we need to practice subtract notation
// Else, just add the value of the "current numeral"
// Challenge: Recognize the subtract notation is the main determinant 

const BasicRomanNumerals = (str) => {
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,

    }

    let total = 0;

    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        let neighbor = str[i+1]

        // check: 'neighbor !== undefined' to ensure we don't access out of bounds of the string.
        if (neighbor !== undefined && romans[neighbor] > romans[current]) {
            total -= romans[current];
        } else {
            total += romans[current];
        }
        
    }

    console.log(total);
    return total;

}

BasicRomanNumerals(str);


