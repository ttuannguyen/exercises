// Empty spaces separate words
// Note:
// We'll need a helper function to help reverse the whole arr as well as part of the arr

function reverseWords(arr) {
    // reverse the whole array 
    reverseHelper(arr, 0, arr.length-1)

    console.log(arr)



}


// Helper function using the 2-pointer technique 
function reverseHelper(arr, start, end) {
    while (start < end) {
        // op
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;

        start++;
        end--;
    }
    return arr;
}
  
// debug your code below
const arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
            'm', 'a', 'k', 'e', 's', '  ',
            'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];
  
console.log(reverseWords(arr));

let answer = reverseHelper(arr);



