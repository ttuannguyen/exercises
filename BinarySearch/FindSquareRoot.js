// Objective: compute the square root of a non-negative number (to a certain level of precision.)
const PRECISION = 1e-6;

function squareRoot(x) {
    let low = 0;
    let high = x;

    while ((high - low) > PRECISION) {
        let mid = (low + high) / 2;
        if (mid * mid < x) {
            low = mid;    
        } else {
            high = mid;
        }
    }

    return (low + high) / 2;

}

let answer = squareRoot(28);