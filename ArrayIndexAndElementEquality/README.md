Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:
input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.

- While coding the solution is simple, this question takes a solid understanding of binary search and how to apply it. The solution is not complete without getting a logarithmic time complexity and an explanation/proof for it.
- If your peer can’t advance beyond the naive solution, ask them how they usually perform a an efficient scan on a sorted array (binary search, of course).
Using binary search “as is” won’t work since we aren’t looking for a specific value in the array, but rather a value for which arr[i] == i. Can your peer think of how to modify the binary search algorithm so it works on latter case?
- If still no progress, ask your peer how they can transform the input array in a way that will allow them to apply the binary search algorithm and get the correct answer. Hint: subtraction.
The key to solving this problem is understanding that we can apply binary search on the values that result from subtracting every index i from its corresponding value arr[i], i.e arr[i] - i. Ask your peer if they understand why this works.
- Even if your peer isn’t familiar with the notion of a strictly monotonically increasing sequence, they should be able to articulate intuitively the correctness of their solution (share this notion with them if they didn’t mention it in their answer).
- The subtraction trick is elegant but it's not a must. You can instead check whether arr[i] is equal to, lower than or greater than i to decide whether to return i, scan the upper half of the array, or scan the lower half of the array, respectively.
- If your peer finds an element that satisfies arr[i] == i, but there are elements before it that also satisfy the condition, you may advise them to alter their implementation of the binary search to specifically find the first occurrence of an element, by checking whether the preceding element also satisfies the condition.