/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    function dfs(x,y) {
        grid[x][y] = 0;
        if (Number(grid[x][y-1])) dfs(x,y-1);
        if (Number(grid[x][y+1])) dfs(x,y+1);
        if (grid[x-1] && Number(grid[x-1][y])) dfs(x-1,y);
        if (grid[x+1] && Number(grid[x+1][y])) dfs(x+1,y);

    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const cell = grid[i][j];
            if (Number(cell)) {
                count++;
                dfs(i,j);
            }
        }
    }
    return count;
};