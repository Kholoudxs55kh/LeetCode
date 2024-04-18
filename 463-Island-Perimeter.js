/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let per = 0;
    
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!grid[i][j]) continue;
            per += 4;
            if (i < row - 1 && grid[i + 1][j]) per--;
            if (j < col - 1 && grid[i][j + 1]) per--;
            if (i > 0 && grid[i - 1][j]) per--;
            if (j > 0 && grid[i][j - 1]) per--;
        }
    }
    
    return per;
};