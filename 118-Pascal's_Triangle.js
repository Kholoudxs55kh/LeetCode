/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) return [];

    let output = [[1]];

    for (let i = 1; i < numRows; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(output[i - 1][j - 1] + output[i - 1][j]);
        }
        row.push(1);
        output.push(row);
    }

    return output;
};
