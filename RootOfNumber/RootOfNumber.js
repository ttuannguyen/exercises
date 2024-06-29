/* Solution 1
Approach:  Binary Search: The approach involves repeatedly narrowing down the interval within which the n-th root of 𝑥 lies. It starts with an initial range [0,𝑥][0,x] (or [0,1][0,1] if 𝑥<1x<1) and iteratively refines this range by:
- Calculating the midpoint (mid) of the current interval.
- Raising mid to the power of n to see how it compares to x.
- Adjusting the interval based on whether mid^n is greater than or less than x.
*/

function root(x, n) {
    // Edge cases:
    if (x === 0) return 0;
    if (x === 1) return 1;

    // Binary search set up
    let low = 0;
    let high = x;
    let mid;

    // Adjust the high bound for numbers less than 1
    if (x < 1) high = 1;

    // Binary search loop
    // The method continues to adjust the bounds until the interval is sufficiently small, ensuring accuracy within the desired error margin
    while (high - low > 0.001) {
        mid = (low + high) / 2;
        let midPow = Math.pow(mid, n); // The Math. pow() method returns the value of mid to the power of n
        // We're raising mid to the power of n to see how it compares to x

        // Adjusting the interval based on whether mid^n is greater than or less than x.
        if (midPow > x) {
            high = mid;
        } else {
            low = mid;
        }
        console.log(midPow, "high:", high, "low:", low)
    }

    return (low + high) / 2;
}

// Time Complexity: The binary search method ensures that the range is halved in each iteration, making the time complexity O(log( 0.001max(x,1))). This is efficient for the given constraints.
// Space Complexity: The space complexity is O(1) as the function uses a constant amount of extra space.


/* Solution 2
*/

function root2(x, n) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    
    let guess = x / n;  // Initial guess
    const epsilon = 0.001;  // Tolerance

    while (true) {
        // Calculate next guess using Newton-Raphson method
        let nextGuess = ((n - 1) * guess + x / Math.pow(guess, n - 1)) / n;
        
        // Check for convergence
        if (Math.abs(nextGuess - guess) < epsilon) {
            return nextGuess;
        }
        
        // Update guess for next iteration
        guess = nextGuess;
    }
}




let answer = root(7, 3);
console.log(answer);