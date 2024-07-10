// Clarification: The main determinant is the total visitors present during that time, which can be accumulated from the last time

// Approach 1: Using a hash table
function findBusiestPeriod1(data) {
    // your code goes here
    let map = {};
    let peopleCount = 0;
  
    for (let i = 0; i < data.length; i++) {
        if (data[i][2] === 1) {
            peopleCount += data[i][1];  
        } else {
            peopleCount -= data[i][1];  
        }
        map[data[i][0]] = peopleCount;
    }
    
    let max = 0;
    let maxKey = '';
    for (let key in map) {
        if(map[key] > max) {
            max = map[key];
            maxKey = key;
        }
    }

    console.log(maxKey);
    return parseInt(maxKey);
}

// Approach 2: Only using 1 for loop
function findBusiestPeriod2(data) {
    let currentVisitors = 0;
    let maxVisitors = 0;
    let busiestTime = 0;

    for (let i = 0; i < data.length; i++) {
        const [timestamp, count, type] = data[i];

        if (type === 1) {
            currentVisitors += count; // people entering
        } else {
            currentVisitors -= count; // people existing
        }

        // If next timestamp is different or we're at the end of the array => ready for comparison
        if (i === data.length -1 || data[i + 1][0] !== timestamp) {
            if (currentVisitors > maxVisitors) { 
                maxVisitors = currentVisitors;
                busiestTime = timestamp;
            }
        }
    }

    return busiestTime;

}
  
const data =[[1487799425, 14, 1], 
            [1487799425, 4, 1], 
            [1487799425, 2, 1], 
            [1487800378, 10, 1], 
            [1487801478, 18, 1], 
            [1487901013, 1, 1], 
            [1487901211, 7, 1], 
            [1487901211, 7, 1]];
  
findBusiestPeriod(data);