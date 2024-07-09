// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Method 1: Using hash table
// Time complexity: O(n) (faster); space complexity: O(n) (downside)
function firstRecurringCharacter1(input) {
    let map = {};
    // basic for turning an array into a hash table: use a for loop, assign a key and value at each iteration
    for (let i = 0; i < input.length; i++) {
        // console.log(map[input[i]]);
        // Note: in if statements in JS, 0z are falsy
        // For if conditionals, if the key doesn't exist, if would return undefined
        // Thus, we need to change the conditional to not equal undefined so we can return the key at index 0
        if(map[input[i]] !== undefined) {
            // Logic: if the key already exists in the hash table, just return that key (i.e. the answer)
            return input[i];
        } else {
            map[input[i]] = i; // this assigning task is the key for building a hash table
        }
        console.log(map);
    }
    return(undefined);
}

// Method 2: Using a nested for loop
// Time complexity: O(n^2)
function firstRecurringCharacte3(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            // console.log(input[i], input[j])
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

// Very obscure
function firstRecurringCharacte5(input) {
    for (let i = 0; i < input.length; i++) {
        let index = Math.abs(input[i] - 1);
        if (arr[index] < 0) {
            return Math.abs(arr[i]);
        }
        arr[index] = -arr[index];
    }
    return undefined;
}


const input = [2,1,1,2,3,5,1,2,4];
const answer = firstRecurringCharacter(input);
console.log(answer);

// Method 3: Using a Set
function firstRecurringCharacter4(input) {
    const seen = new Set();
    for (const char of input) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }
    return undefined;
}



//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2