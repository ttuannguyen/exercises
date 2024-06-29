// previous1: n - 1
// previous2: n - 2
// current = previous1 + previous2
// for the next iteration: current becomes previous1, previous2 becomes previous1
// n represents the nth numbe / position in the sequence
// [0,1,1,2,3,5,8,13,21]

const fibonacci1 = (n) => {
    // if (n < 2) {
    //     return n;
    // }
    
    // let current = 1;
    // let previous = 0;

    // for (let i = 2; i <= n; i++) {
    //     const temp = current + previous; 
    //     previous = current;
    //     current = temp; 
    //     // console.log(i, previous, current);
    // }

    // return current;

}

let answer = fibonacci1(7);
console.log(answer);