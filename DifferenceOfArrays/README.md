Write a function diff(arrA, arrB) that accepts two arrays and returns a new array that contains all values that are not contained in both input arrays. The order of numbers in the result array does not matter.

Examples
Python
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]

diff(a, b) # => [1, 2, 5, 6]
Note: we don't care if numbers are out of order or repeated; for example, these two arrays are equivalent since they are re-arrangements of the same values:

Python
a = [1, 2, 1]
b = [2, 1, 2]

diff(a, b) # => []

Hint 1
It's possible to solve this problem by brute force (comparing every element to the elements in the other list), but can you think of a more efficient solution?


Hint 2
There is another data structure related to an array that makes it easier to do these kind of comparisons.


Hint 3
You could use a hash table or a set. A hash table will allow you to check whether an element exists in the other list more easily. Sets—if your language of choice supports them—are an even better option.


Challenge 1
Can you solve this problem in linear time?