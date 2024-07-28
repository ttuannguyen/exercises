// Gameplan:
// Traverse through the 2D array
// Pattern: going through outer layer first, i.e. first row, last col, last row, first col, and so on 

function spiralCopy(inputMatrix) {
    // your code goes here
    // for (let i = 0; i < inputMatrix.length; i++) {
    //     // console.log(inputMatrix[i]);
    //     for (let j = 0; j < inputMatrix[i].length; j++) {
    //         console.log(inputMatrix[i][j])
    //     }
    // }

    let numRows = inputMatrix.length;
    let numCols = inputMatrix[0].length;

    // starting poiters to traverse
    let topRow = 0;
    let bottomRow = numRows - 1; 
    let leftCol = 0;
    let rightCol = numCols - 1;
    
    const result = [];

    while (leftCol <= rightCol && topRow <= bottomRow) {
        // Copy the next top row
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(inputMatrix[topRow][i]);
        }
        topRow++;
    }
    return result;
}


function spiralCopy2(inputMatrix) {
    const numRows = inputMatrix.length;
    const numCols = inputMatrix[0].length;
  
    let topRow = 0;
    let btmRow = numRows - 1;
    let leftCol = 0;
    let rightCol = numCols - 1;
    const result = [];
  
    while (topRow <= btmRow && leftCol <= rightCol) {
      // Copy the next top row
      for (let i = leftCol; i <= rightCol; i++) {
        result.push(inputMatrix[topRow][i]);
      }
      topRow++;
  
      // Copy the next right hand side column
      for (let i = topRow; i <= btmRow; i++) {
        result.push(inputMatrix[i][rightCol]);
      }
      rightCol--;
  
      // Copy the next bottom row
      if (topRow <= btmRow) {
        for (let i = rightCol; i >= leftCol; i--) {
          result.push(inputMatrix[btmRow][i]);
        }
        btmRow--;
      }
  
      // Copy the next left hand side column
      if (leftCol <= rightCol) {
        for (let i = btmRow; i >= topRow; i--) {
          result.push(inputMatrix[i][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
  }
  
// debug your code below
const inputMatrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

spiralCopy2(inputMatrix)