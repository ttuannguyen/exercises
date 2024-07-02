// input: string of brackets
// output: number of brackets to match
// key: tracking unmatched, everything will be positive
// key to understanding the problem:
// notice regarding prefix rule, unmatched open bracket can be negated   
// but if close bracket is at the start, it will always need a match 

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
                closeBrackets++; // close bracket that starts by itself will always need a match
            }
        }
    }

    return openBrackets + closeBrackets;

}


const text = '())('; // => output: 2
console.log(bracketMatch(text));