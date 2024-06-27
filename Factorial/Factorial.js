// Needs for recursion:
// 1. Base case
// 2. Recursive case
// 3. Get closer and closer and return

const findFactorialRecursive = (number) => {
    
    let answer = 0;
    if (number === 1) {
        return 1;
    }

    if (number === 0) {
        return 0;
    }

    if (number > 1) {
        answer += number * findFactorialRecursive(number-1);
        number--;
    }

    return answer;


}

const findFactorialIterative = (number) => {
    let answer = 0;
    return answer;
}

const number = 5;
let answer = findFactorialRecursive(number);
console.log(answer);