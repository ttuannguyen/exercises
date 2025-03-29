function solution (arr) {

    // Useful method: .splice() 

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12];

console.log(solution(arr));

