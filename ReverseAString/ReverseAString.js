function reverse(str) {
    let stack = [];

    for (const char in str) {
        // console.log(str[char]);
        stack.push(str[char]);
    }

    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

let answer = reverse('hello');



