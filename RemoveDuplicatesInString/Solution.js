// Notes: Practice understanding the problem
// It's ambiguous if they care for the order of removal (from the end or beginning first, but we can assume it can happen from anywhere for now)
// Upon removal of characters, we might find new adjacent characters

// Naive brute force approach:
// Iterate backwards 
// Remove adjacent characters, concatenate the 2 sides that are remaining
// Re-evaluate the altered string and continue removing adjacent characters
// Recursion makes sense for this kind of continuous counting and dynamic string altering 
// Need to come up with base case and recursive case
// If no adjacent string found, the output should just return the input

// Stack approach:
// Check if count is equal to what K is given, use a separate list to keep the count 
// Comparison: current character vs top of stack 
// When there is an equal count (current in string vs top of stack) => use pop operation to remove from top of stack 


function identifyAdjacent(s, k) {
    // your code goes here

    let stack = []; // <char, count>
    // if (stack.length === 0) {
    //     console.log('empty');
    // }

    for (let char in s) {
        // if stack's top = current character 
        if (stack.length !== 0 && stack[stack.length-1][0] === s[char]) {
            stack[stack.length-1][1] += 1;

            if (stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([s[char], 1])
        }
    }
    // console.log(stack);

    // Important technique to know to replace the nested loop
    let result = '';

    for (let i = 0; i < stack.length; i++) {
        for (let j = 0; j < stack[i][1]; j++) {
            result += stack[i][0];
        }
    }

    console.log(result);
    
    // return s;

}

// debug your code below
console.log(identifyAdjacent("pbbcggttciiippooaais", 2));