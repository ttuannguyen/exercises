function findBusiestPeriod(data) {
    // your code goes here
    let map = {};
    let result = 0;
  
    for (let i = 0; i < data.length; i++) {
      if(map[data[i][0]] !== undefined) {
          if (data[i][2] === 1) {
              map[data[i][0]] = map[data[i][0]] + data[i][1];  
          } else {
              map[data[i][0]] = map[data[i][0]] - data[i][1];  
          }
      } else {
          if (data[i][2] === 1) {
              map[data[i][0]] = data[i][1];  
          } else {
              map[data[i][0]] = -(data[i][1]);  
          }
          
      }
      // console.log(data[i][0]);
    }
  
    console.log(map);
    
  }
  
  
const data = [ [1487799425, 14, 1], 
                [1487799425, 4,  0],
                [1487799425, 2,  0],
                [1487800378, 10, 1],
                [1487801478, 18, 0],
                [1487801478, 18, 1],
                [1487901013, 1,  0],
                [1487901211, 7,  1],
                [1487901211, 7,  0] ]
  
findBusiestPeriod(data);