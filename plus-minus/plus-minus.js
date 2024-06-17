/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here    
    const length = arr.length;
    
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if ((arr[i] < 0)) {
            negativeCount++;   
        } else {
            zeroCount++;
        }
    }

    console.log(positiveCount / length);
    console.log(negativeCount / length);
    console.log(zeroCount / length);
    
}

function main() {
    const arr = [-4, 3, -9, 0, 4, 1];

    plusMinus(arr);
}

main();