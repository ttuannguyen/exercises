let input = [0,0,1,1,1,2,2,3,3,4]; 

const removeDuplicates = (input) => {
    // Approach: use a Set to get only the unique values
    const result = [];

    const seen = new Set();
    for (let i  = 0; i < input.length; i++) {
        seen.add(input[i]);
    }

    seen.forEach(num => result.push(num));

    return result;

}

const answer = removeDuplicates(input);

console.log(answer);