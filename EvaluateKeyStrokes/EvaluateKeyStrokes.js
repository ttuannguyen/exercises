// input = string 
// remove the character at the position before < and < itself

// Solution 1: Brute force / naive approach: for loop
const evaluateKeyStrokes = (input) => {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(result.length > 0 && input[i] === '<') {
            result.pop();
        } else {
            result.push(input[i]);
        }
    }

    // for (let i = input.length-1; i >= 0; i--) {
    //     // if the character is '<', we want to skip 2 places to the front => flawed
    //     if (input[i] === '<') {
    //         i = i - 2;
    //     }
    //     result = `${input[i]}` + result;
    // }
    
    return result.join('');
}

// Solution 2: Using a stack
const evaluateKeyStrokes2 = (input) => {
    //
}

const input = 'abcd<<<fg<h'; // => 'abcdfh'
let answer = evaluateKeyStrokes(input);
console.log(answer);
