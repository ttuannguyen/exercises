// Objective: compute the square root of a non-negative number (to a certain level of precision.)
const PRECISION = 1e-6;

function squareRoot(x) {
    let low = 0; // lower bound
    let high = x; // upper bound

    while ((high - low) > PRECISION) { // loop run as long as diff is higher than precision
        let mid = (low + high) / 2;
        if (mid * mid < x) { // check if the square of mid is less than x
            low = mid; // mid is too low to be square root so we set adjust low to mid
        } else {
            high = mid; // otherwise, mid is too high or just right, so we adjust high to mid
        }
    }

    // when the loop terminates, low and high are very close to each other, so their average yields a value that is very close to the actual value of 'x'
    return (low + high) / 2; 

}

let answer = squareRoot(28);
console.log(answer);