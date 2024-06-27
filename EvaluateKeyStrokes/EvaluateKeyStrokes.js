const input = 'abcde<fg<h'; // => 'abcdfh'

// input = string 
// remove the character at the position before < and < itself

const evaluateKeyStrokes = (input) => {

    let result = '';
    
    // Solution 1: Brute force / naive approach: reverse for loop
    for (let i = input.length-1; i >= 0; i--) {
        // if the character is '<', we want to skip 2 places to the front
        if (input[i] === '<') {
            i = i - 2;
        }
        result = `${input[i]}` + result;
    }


    return result;
}

let answer = evaluateKeyStrokes(input);