// Gameplan:
// Traverse through the 2D array
// Pattern: going through outer layer first, i.e. first row, last col, last row, first col, and so on 

function spiralCopy(inputMatrix) {
    // your code goes here
    for (let i = 0; i < inputMatrix.length; i++) {
        // console.log(inputMatrix[i]);
        for (let j = 0; j < inputMatrix[i].length; j++) {
            console.log(inputMatrix[i][j])
        }
    }

    let numRows = inputMatrix.length;
    let numCols = inputMatrix[0].length;

    let topRow = 0;
    let bottomRow = numRows- 1; 
    let leftCol = 0;
    let rightCol = numCols - 1;
    
    let result = [];


}
  
// debug your code below
const inputMatrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralCopy(inputMatrix))