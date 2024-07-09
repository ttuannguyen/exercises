// Notes
// Board is a 2D array

function exist(board, word) {
    
    // Helper function to perform DFS
    function dfs(board, word, i, j, index) {
        // If we've checked all characters in the word, return true
        if (index === word.length) {
            return true;
        }
        // Check if the current cell is out of bounds or doesn't match the current character of the word
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) {
            return false;
        }
        
        // Temporarily mark the current cell as visited
        let temp = board[i][j];
        board[i][j] = ''; // mark the cell as visited
        // Explore the adjacent cells: down, up, right, left
        let found = dfs(board, word, i + 1, j, index + 1) ||
                    dfs(board, word, i - 1, j, index + 1) ||
                    dfs(board, word, i, j + 1, index + 1) ||
                    dfs(board, word, i, j - 1, index + 1);
        board[i][j] = temp; // Unmark the current cell
        return found;
    }

    // Iterate over each cell in the grid
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // If the first character matches, start DFS from this cell
            if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false; // If no path found, return false
}

// Example usage:
const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

const word = "ABCCED";

console.log(exist(board, word)); // Output: true