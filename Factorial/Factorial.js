// Needs for recursion:
// 1. Base case
// 2. Recursive case
// 3. Get closer and closer and return

const findFactorialRecursive = (number) => { // O(n)

    // Base case to stop the recursion if the below condition is reached
    if (number <= 1) {
        return 1;
    }

    // Recursive case:
    // If the number is greater than 1, the function multiples the number by the result of calling itself with "number - 1"
    return number * findFactorialRecursive(number - 1);
    
    // Old code:
    // // Base case: does the number equal 2? This base case also works
    // if (number === 2) {
    //     return 2;
    // }
    // Recursive case
    // if (number > 1) {
    //     return number * findFactorialRecursive(number - 1);
    //     number--; // unnecessary bc the recursive call already handles the decrement
    // } // Omg I did it!!!

}

/* 
5! = 5*4*3*2*1
loop in decreasing order until it reaches 1
*/


const findFactorialIterative = (number) => {
    let result = number;
    if (number === 2) {
        answer = 2;
    }

    for (let i = number; i >=2; i--) {
        result = result * (i-1);
    }

    // for(let i = number-1; i > 0; i--) {
    //     // console.log(i)
    //     if (i === 1) {
    //         return result;
    //     } else {
    //         result = result * i
    //     }
    // }
    return result;
}

const number = 4;
let answer = findFactorialRecursive(number);
let answer2 = findFactorialIterative(number);
console.log(answer2);



/* Learning Notes:
findFactorialRecursive(5)
Returns 5 * findFactorialRecursive(4)
Returns 4 * findFactorialRecursive(3)
Returns 3 * findFactorialRecursive(2) 
Returns 2 * findFactorialRecursive(1)

Now, let's substitute back up the call stack:

findFactorialRecursive(2) returns 2 * 1 = 2.
findFactorialRecursive(3) returns 3 * 2 = 6.
findFactorialRecursive(4) returns 4 * 6 = 24.
findFactorialRecursive(5) returns 5 * 24 = 120.

Further visualization to aid understanding:
findFactorialRecursive(5)
=> 5 * findFactorialRecursive(4)
=> 5 * (4 * findFactorialRecursive(3))
=> 5 * (4 * (3 * findFactorialRecursive(2)))
=> 5 * (4 * (3 * (2 * findFactorialRecursive(1))))
=> 5 * (4 * (3 * (2 * 1)))
=> 5 * (4 * (3 * 2))
=> 5 * (4 * 6)
=> 5 * 24
=> 120

Key: We need to think in terms of the call stack
*/




