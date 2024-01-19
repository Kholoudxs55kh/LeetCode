/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let stRow = matrix[i - 1][j];
            
            if (j > 0) {
                stRow = Math.min(stRow, matrix[i - 1][j - 1]);
            }

            if (j < matrix[0].length - 1) {
                stRow = Math.min(stRow, matrix[i - 1][j + 1]);
            }

            matrix[i][j] += stRow;
        }
    }

    return Math.min(...matrix[matrix.length - 1]);
};
