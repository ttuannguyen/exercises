function reverse2(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    console.log(stack);
    
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }


    console.log(reversed);

}

function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}


let answer = reverse2('hello');
console.log(answer);



