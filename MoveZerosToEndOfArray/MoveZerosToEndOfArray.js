function solution (arr) {
    let newArr = [];
    let zeroCounter = 0;

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        } else {
            zeroCounter++;
        }
    }

    if (zeroCounter > 0) {
        for (let i = 1; i <= zeroCounter; i++) {
            newArr.push(0);
        }
    }

    return newArr;
}

const arr = [0, 1, 0, 3, 12];

console.log(solution(arr));

