let input = [0,0,1,1,1,2,2,3,3,4]; 

const removeDuplicates = (input) => {
    // Approach: use hash table to tally up the count for each number
    // Or use a set to get only the unique values

    const seen = new Set();
    for (let i  = 0; i < input.length; i++) {
        seen.add(input[i]);
    }

    console.log(seen);
    
}

const answer = removeDuplicates(input);

console.log(answer);