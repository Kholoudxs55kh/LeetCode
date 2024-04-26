/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    const size = grid.length;
    let minSum = Infinity;
    const dp = new Array(size).fill().map(() => new Array(size).fill(-1));

    for (let col = 0; col < size; ++col) dp[0][col] = grid[0][col];

    for (let row = 1; row < size; ++row) {
        for (let col = 0; col < size; ++col) {
            let minTemp = Infinity;

            for (let prevCol = 0; prevCol < size; ++prevCol) {
                if (col !== prevCol) minTemp = Math.min(minTemp, grid[row][col] + dp[row - 1][prevCol]);
            }

            dp[row][col] = minTemp;
        }
    }

    for (let col = 0; col < size; ++col) minSum = Math.min(minSum, dp[size - 1][col]);

    return minSum;
};
