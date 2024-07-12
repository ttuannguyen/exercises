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
        if (stack.length !== 0 && stack[-1][0] === char) {
            stack[-1][1] += 1;

            if (stack[-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1])
        }

    }


    return s;

}

// debug your code below
console.log(identifyAdjacent("deeedbbcccbdaa", 3));