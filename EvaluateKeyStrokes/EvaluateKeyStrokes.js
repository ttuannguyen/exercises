// Notes: input = string; remove the character at the position before < and < itself

// Solution 2: stack approach under the hood
// When a character is not <, it is pushed onto the stack
// When a < is encountered, the last character (the top of the stack) is popped off
const evaluateKeyStrokes2 = (input) => {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] === '<') {
            if(result.length > 0) {
                result.pop();
            }
        } else {
            result.push(input[i]);
        }
    }
    return result.join('');
}

// Solution 1: loop approach
// Initialize var i and a 'skip'
// In a reverse loop fashion, iterate backward
// Every time we encounter '<', we're going to increase the skip count, then manually decrease i to go to the next character (convention for a while loop)
// Else
    // if there is a skip count, we're going to decrease i by that skip count, and reset the skip count to 0
    // if not, we will just add the character at the current iteration to the front of the string

const evaluateKeyStrokes = (input) => {
    let result = '';
    let skip = 0;

    for (let i = input.length-1; i >= 0; i--) {
        if (input[i] === '<') {
            skip++;
        } else {
            if (skip > 0) {
                skip--;
            } else {
                result = input[i] + result;
            }
        }
    }

    // // while loop approach
    // let i = input.length-1;
    // while (i >= 0) {
    //     if (input[i] === '<') {
    //         skip++;
    //     } else {
    //         if (skip > 0) { 
    //             // the idea is if there is a skip, we're not going to get to the "else" part below to add the new character and just go to the next iteration
    //             skip--; 
    //         } else {
    //             result = input[i] + result;
    //         }
    //     }
    //     i--;
    // }
    
    return result;
}


const input = 'abcd<<<fg<h'; // => 'abcdfh'
let answer = evaluateKeyStrokes(input);
console.log(answer);


/* Note on each iteration involving skip:
i = 11: input[i] = 'h', skip = 0, so result = 'h'.
i = 10: input[i] = '<', increment skip to 1.
i = 9: input[i] = 'g', skip = 1, so decrement skip to 0.
i = 8: input[i] = 'f', skip = 0, so result = 'fh'.
i = 7: input[i] = '<', increment skip to 1.
i = 6: input[i] = '<', increment skip to 2.
i = 5: input[i] = '<', increment skip to 3.
i = 4: input[i] = 'd', skip = 3, so decrement skip to 2.
i = 3: input[i] = 'c', skip = 2, so decrement skip to 1.
i = 2: input[i] = 'b', skip = 1, so decrement skip to 0.
i = 1: input[i] = 'a', skip = 0, so result = 'afh'.
*/