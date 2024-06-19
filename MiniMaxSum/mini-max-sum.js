// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    
    // METHOD 1: Use JS built-in methods for JS: reduce, max, min
    const initialValue = 0;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);

    const min = sum - maxValue;
    const max = sum - minValue;
    


    // METHOD 2: Use bubble sort to sort the array, then use for loop to calc max and min
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length - 1 - i; j++) {
    //         // console.log(arr[i], arr[j]) // to visualize
    //         // Changed the condition from: j < arr.length
    //         // We don't see an immediate error because arr[j + 1] would just return undefined when j is at the last index
    //         // but that is not correct logic and can lead to subtle bugs
    //         if (arr[j] >= arr[j+1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //         }
    //     }
    // }
    
    // let min = 0;
    // let max = 0;
    
    // for (let i = 0; i < arr.length-1 ; i++) {
    //     min += arr[i] 
    // }
    
    // for (let i = 1; i < arr.length; i++) {
    //     max += arr[i] 
    // }
    
    
    console.log(min, max);

}

function main() {
    const arr = [7, 69, 2, 8974, 221];
    miniMaxSum(arr);
}

main()