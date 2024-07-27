Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that:

Copies inputMatrix’s values into a 1D array in a spiral order, clockwise.
Returns the the 1D array.
For example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12. 2]

Hint 1
What pattern(s) jump out at you when looking at the above image of a spiral clockwise matrix?


Hint 2
If you are tempted to change the matrix - don't. There's no need to do this.


Challenge 1
Have you checked for negative or out of bounds indices?


Challenge 2
Double check that each value is copied only once!