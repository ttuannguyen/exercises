// Approach 1: stack data structure
// Overall time complexity: O(n)
function reverse(str) {
    // Create a stack in the form of an empty arr
    let stack = []; // O(1)

    // Populate the stack with the characters
    for (const char in str) { // O(n)
        // console.log(str[char]);
        stack.push(str[char]);
    }

    // With the LIFO nature of the stack, we pop the characters off of the stack and effectively reverse the string
    let reversed = '';
    while (stack.length > 0) { // O(n)
        reversed += stack.pop();
    }

    return reversed;
}

// Approach 2: reversed for loop
function reverse2(str) {
    let result = '';
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i];
    }
    
    console.log(result);
    return result;
}

// Approach 3: 2-pointers technique
function reverse3(str) {
    let start = 0; 
    let end = str.length-1;

    console.log(str[start]);

    while (start < end) {
        let tmp = str[start];
        str[start] = str[end];
        str[end] = tmp;
        
        start++;
        end--;
    }
}


let answer = reverse3('hello');
console.log(answer);



