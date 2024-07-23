Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 2, 1, 3, 5]

output: 4

Hint 1
First, think of a brute force/naive solution. Don't forget that that arr consists of unique nonnegative integers.


Hint 2
A brute force algorithm that takes you in the right direction might consist of two parts. First, create a copy of the array, say arrSorted, and sort it in ascending order. Then, return an index i at the first iteration the condition i != arrSorted[i] is met. Since the duplicate array is sorted and all of its values are unique nonnegative integers, by definition if i != arrSorted[i], then i isn’t in arrSorted, and therefore not in arr either!


Hint 3
Now, try to optimize the brute force solution which should be O(N*log(N)) due to sorting.


Hint 4
Can you think of a data structure that would eliminate the need for sorting?


Hint 5
Are you familiar with any data structures whose lookup time is constant, i.e. O(1)?


Hint 6
Can you use the Set data structure to optimize the brute force solution from the above?


Challenge 1
One common mistake is to find the maximum value in arr and then return that value plus 1 as the result. This will not work, for instance, for the case when arr = [MAX_INT].


Challenge 2
You might be tempted to find the minimum value in arr and then returning that value minus 1. This approach will fail, for instance, when arr = [0].