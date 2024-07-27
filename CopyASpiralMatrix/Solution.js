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
}
  
// debug your code below
const inputMatrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralCopy(inputMatrix))