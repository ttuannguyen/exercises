// Clarification: The main determinant is the total visitors present during that time, which can be accumulated from the last time
function findBusiestPeriod(data) {
    // your code goes here
    let map = {};
    let peopleCount = 0;
    let time = '';
  
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
  
  
const data =[[1487799425, 14, 1], 
            [1487799425, 4, 1], 
            [1487799425, 2, 1], 
            [1487800378, 10, 1], 
            [1487801478, 18, 1], 
            [1487901013, 1, 1], 
            [1487901211, 7, 1], 
            [1487901211, 7, 1]];
  
findBusiestPeriod(data);