Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.

Examples:

input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
Constraints:

[time limit] 5000ms

[input] float x

0 ≤ x
[input] integer n

0 < n
[output] float

Solution:
1. Define the function signature: The function root(x, n) takes a nonnegative number x and a positive integer n.
2. Initial checks: Handle edge cases where x is 0 or 1, as their n-th roots are themselves.
3. Binary Search: Use binary search to narrow down the possible range for the n-th root.
4. Iterate until convergence: Continue the search until the approximation error is within the specified tolerance (0.001).

Hints:
- If your peer doesn’t know how to tackle this question, advise them to try it first on concrete examples. Encourage them to make an intelligent guess, and then bound the error.
- If you peer is still stuck, ask them how they can use binary search to solve the problem.
- Also, it is recommended for your peer to look at the graph of the function xn. And while the function may not use any kind of built-in power function, it is OK for your peer to use such functions in the programming and debugging process.
- Your peer should receive full score for this question only if they manage to find a method that is at least as efficient as the method below, along with explaining how it is correct and analyzing its time and space complexities.