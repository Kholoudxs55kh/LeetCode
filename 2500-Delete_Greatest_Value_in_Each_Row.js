/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0;

    grid.forEach(row => row.sort((a, b) => a - b));

    for (let col = 0; col < grid[0].length; col++) {
        const maxInCol = Math.max(...grid.map(row => row[col]));
        res += maxInCol;
    }

    return res;
};

// Runtime 56ms Beats 86.58%
