// input: string of brackets
// output: number of brackets to match
// key: tracking unmatched, everything will be positive
// key to understanding the problem:
// notice regarding prefix rule, unmatched open bracket can be negated   
// but if close bracket is at the start, it will always need a match 

// Approach: counter-based technique
function bracketMatch(text) {

    let openBrackets = 0; // to track unmatched open brackets
    let closeBrackets = 0; // to track unmatched close brackets

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            openBrackets++;
        } else {
            if (openBrackets > 0) {
                openBrackets--;
            } else {
                closeBrackets++; // closing bracket that starts by itself will always need a match
            }
        }
    }

    return openBrackets + closeBrackets;

}

function bracketMatch2(text) {
    let diffCounter = 0; // keeps track of the net number of unmatched opening brackets.
    let ans = 0;  // counts the number of unmatched closing brackets encountered.
    const n = text.length;

    for (let i = 0; i < n; i++) {
        if (text[i] === '(') {
            diffCounter++;
        } else if (text[i] === ')') {
            diffCounter--;
        }
        // If diffCounter becomes negative, it means there's an unmatched closing bracket. 
        // Increment diffCounter to reset it to zero (as if adding an opening bracket to match this closing bracket) 
        // Increment ans to count this unmatched closing bracket.
        if (diffCounter < 0) {
            diffCounter++;
            ans++;
        }
    }
    
    return ans + diffCounter; // diffCounter = unmatched opening & ans = unmatched closing
}


const text = '())('; // => output: 2
console.log(bracketMatch(text));