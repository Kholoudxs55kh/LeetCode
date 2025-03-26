/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    let flat_grid = grid.flat()
    let ops = 0

    for (let number of flat_grid) {
        if (number % x !== (flat_grid[0] % x)) return -1
    }

    flat_grid.sort((a, b) => a - b)
    let median = flat_grid[Math.floor(flat_grid.length / 2)]
    
    for (let num of flat_grid) ops += Math.abs(num - median) / x

    return ops
};