/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0

    let previous = new Array(obstacleGrid[0].length).fill(0)
    previous[0] = 1

    for (let row = 0; row < obstacleGrid.length; row++) {
        const current = new Array(obstacleGrid[0].length).fill(0)
        for (let col = 0; col < obstacleGrid[0].length; col++) {
            const isObstacle = obstacleGrid[row][col] === 1
            if (isObstacle) continue

            current[col] = previous[col] + (current[col - 1] ?? 0)
        }
        previous = current
    }

    return previous[obstacleGrid[0].length - 1]
};