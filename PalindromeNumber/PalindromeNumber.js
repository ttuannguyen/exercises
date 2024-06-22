// Objective: Given an integer x, return true if x is a palindrome, and false otherwise.
// Example: Input: x = 121; Output: true; Explanation: 121 reads as 121 from left to right and from right to left.

const isPalindromeNumber = (num) => {
    const string = num.toString();
    let newString = '';

    for (let i = string.length-1; i >= 0; i--) {
        newString += string[i];
    }

    if (newString === string) {
        return true;
    }

    return false;
}

const num = 121;

const answer = isPalindromeNumber(num);
console.log(answer);