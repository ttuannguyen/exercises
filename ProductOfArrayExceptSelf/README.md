Given an array nums of n integers where n > 1, return an array output such that each element at index i of output is equal to the product of all the numbers in the original array except nums[i].

Examples:

nums = [1, 2, 3, 4]
output: [24, 12, 8, 6]

nums = [0, 0]
output: [0, 0]

nums = [4, 5, 1, 8, 2]
output: [80, 64, 320, 40, 160]

nums = [-2, 1, -3, 4, -1]
output: [12, -24, 8, -6, 24]

Challenge 1
Can you design an algorithm with a time complexity of O(n)?


Solution 
Initialization: result is initialized to store the final output, with all elements set to 1. We also initialize two variables leftRunningProduct and rightRunningProduct to 1, which will be used to store the product of elements to the left and right of the current index, respectively.

First Traversal (Left Product): We traverse the array from left to right. For each element at index i, we set result[i] to the current value of leftRunningProduct. Then, we update leftRunningProduct by multiplying it with nums[i].

Second Traversal (Right Product): We traverse the array from right to left. For each element at index i, we multiply result[i] by the current value of rightRunningProduct. Then, we update rightRunningProduct by multiplying it with nums[i].

This approach ensures that result[i] contains the product of all elements except nums[i] after both traversals.



Example:
Input array: nums = [4, 8, 2, 3]

Initialization:
result              = [1, 1, 1, 1]
leftRunningProduct  = 1
rightRunningProduct = 1

First traversal (left product):
result[0] = 1
leftRunningProduct = 1 * 4 = 4

result[1] = 1 * 4 = 4
leftRunningProduct = 4 * 8 = 32

result[2] = 1 * 32 = 32
leftRunningProduct = 32 * 2 = 64

result[3] = 1 * 64 = 64
leftRunningProduct = 64 * 3 = 192

After first traversal:
result = [1, 4, 32, 64]

Second traversal (right product):
result[3] = 64 * 1 = 64
rightRunningProduct = 1 * 3 = 3

result[2] = 32 * 3 = 96
rightRunningProduct = 3 * 2 = 6

result[1] = 4 * 6 = 24
rightRunningProduct = 6 * 8 = 48

result[0] = 1 * 48 = 48
rightRunningProduct = 48 * 4 = 192

After second traversal:
result = [48, 24, 96, 64]

Final result = [48, 24, 96, 64]