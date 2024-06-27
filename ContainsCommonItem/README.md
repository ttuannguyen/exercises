Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
For Example:
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
should return false.
-----------
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
should return true.

Step by step
#3 We might want to ask the interviewer how large this array is going to get; bc if it's just 5 items we might not have to worry about big O or time or space complexity as much. What's more important (efficiency or memory space) 
#5 & 6 Brute force: nested for loop: O(n^2) quadratic; space complexity O(1)
#9 This block of code is going to do X and that block of code is going to do Y. Small bits and pieces that read like English. We should write clean code that is readable and easy for anyone to pick up and code along.
#11 E.g. changing type of an input in an array, if the second array is missing or null
Can we assume always 2 params? We can implement if statements or check the input etc. 
Tell the interviewer we're considering these things.
#13 Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc... 
#14 Talk about where we would improve the code. E.g. we can talk about language specific methods that can help streamline the code and improve readability