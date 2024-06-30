// previous1: n - 1
// previous2: n - 2
// current = previous1 + previous2
// for the next iteration: current becomes previous1, previous2 becomes previous1
// n represents the nth numbe / position in the sequence
// [0,1,1,2,3,5,8,13,21]

let calculations = 0;

const fibonacci1 = (n) => {
    // Edge case:
    if (n < 2) {
        return n;
    }
    
    let current = 1;
    let previous = 0;

    for (let i = 2; i <= n; i++) { // O(n)
        // i = 2 bc the first 2 numbers are already known and by starting here we can summing the two preceding numbers
        // i <= n condition is to ensure that it calculates up to the nth Fibonacci number
        const temp = current + previous; 
        previous = current;
        current = temp; 
    }

    return current;
}

// Approach: Recursion 
const fibonacci2 = (n) => {
    // Time complexity: O(2^n), exponential time => very bad, not an idea solution
    // Space complexity: Needs space initial for the call stack but the funcion calls will eventually be popped off from the stack
    // Base case
    if (n < 2) {
        return n;
    }

    // Recursive case
    return fibonacci2(n - 1) + fibonacci2(n - 2)
}
/* Explanation of recursion: We need to think in terms of the call stack
fibonacci2(5) => Calls fibonacci2(4) and fibonacci2(3)
fibonacci2(4) => Calls fibonacci2(3) and fibonacci2(2)
fibonacci2(3) => Calls fibonacci2(2) and fibonacci2(1)
fibonacci2(2) => Calls fibonacci2(1) and fibonacci2(0)
fibonacci2(1) => Returns 1
fibonacci2(0) => Returns 0
fibonacci2(2) => Returns 1 + 0 = 1
fibonacci2(3) => Returns 1 + 1 = 2
fibonacci2(4) => Returns 2 + 1 = 3
fibonacci2(5) => Returns 3 + 2 = 5
*/ 

// Approach: Dynamic programming
const fibonacci3 = () => {
    let cache = {}; // Trading off space complexity for time complexity
    return function fib(n) {
        calculations++; // just for testing
        // Time complexity: O(n)
        if (n in cache) {
            return  cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const answer = fibonacci2(6);
// console.log(answer);

const dp = fibonacci3();
console.log('DP', dp(10));
console.log('We did ' + calculations + ' calculations')