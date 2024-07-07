// Empty spaces separate words

// Approach: Using a stack
// We can use .push() and .pop() method of JavaScript
function reverseWords2(arr) {
    let stack = [];
    let word = [];
    let space = [];

    // Traverse the array to extract words and spaces and push them onto the stack
    for (let char of arr) {
        if (char !== ' ') {
            if (space.length > 0) {
                stack.push(space.join(''));
                space = [];
            }
            word.push(char);
        } else {
            if (word.length > 0) {
                stack.push(word.join(''));
                word = [];
            }
            space.push(char);
        }
    }
    if (word.length > 0) {
        stack.push(word.join(''));
    }
    if (space.length > 0) {
        stack.push(space.join(''));
    }

    let result = [];
    
    // Pop elements from the stack to build the reversed array
    while (stack.length > 0) {
        let element = stack.pop();
        for (let char of element) {
            result.push(char);
        }
    }

    return result;
    
}



// Approach: 2-pointer technique
// We'll need a helper function to help reverse the whole arr as well as part of the arr; it's 2-pointer yay!
function reverseWords(arr) {
    
    // Reverse the whole array 
    reverseHelper(arr, 0, arr.length-1)
    console.log(arr)

    // Reverse each word in the reversed array
    let start = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length || arr[i] === ' ') { // we can combine 2 conditionals like this if we prefer
            reverseHelper(arr, start, i - 1);
            start = i + 1;
        }
    }

    return arr;
    
    // This is flawed; something seems finicky about the condition
    // let start = 0; 
    // let end = -1;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== ' ') {
    //         end++
    //     } else {
    //         // console.log(start, end);
    //         reverseHelper(arr, start, end);
    //         end = end + 2
    //         start = end;
    //         i++;
    //     }
    // }
    // // Reverse the remainder of the array
    // reverseHelper(arr, start, arr.length - 1)
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
}
  
// debug your code below
const arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
            'm', 'a', 'k', 'e', 's', '  ',
            'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];
  
let answer = reverseWords(arr);
console.log(answer);




