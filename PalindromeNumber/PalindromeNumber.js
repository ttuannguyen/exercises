// Objective: Given an integer x, return true if x is a palindrome, and false otherwise.
// Example: Input: x = 121; Output: true; Explanation: 121 reads as 121 from left to right and from right to left.

// Approach 1: using array
const isPalindromeNumber = (num) => {
    const string = num.toString();
    let newString = '';

    // Approach: reverse for loop
    for (let i = string.length-1; i >= 0; i--) {
        newString += string[i];
    }

    if (newString === string) {
        return true;
    }

    return false;
}

// Approach 2: using stack
// Note: only for practice; not the best solution in real world 
const isPalindromeNumber2 = (num) => {
    
    let str = num.toString();
    let arr = [];
    for (const char in str) { // O(n)
        arr.push(str[char]); 
    }
    console.log(arr);
    
    let reversed = '';
    
    while (arr.length) { // O(n)
        reversed += arr.pop();
    }

    if (num === parseInt(reversed)) {
        return true;
    }

    return false;

}

const num = 121;

const answer = isPalindromeNumber2(num);
console.log(answer);