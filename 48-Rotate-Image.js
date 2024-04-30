/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length !== matrix[0].length) return

    let st = 0;
    let last = matrix.length - 1;
    while (st < last) {
        for (let i = 0; i < last - st; i++) {
            let temp = matrix[st][st + i]; // 1
            // console.log(matrix)

            // console.log(matrix[st][st + i] , matrix[last - i][st])
            matrix[st][st + i] = matrix[last - i][st];

            console.log("matrix here is ", matrix)

            // console.log(matrix[last][last - i] , temp)
            matrix[last - i][st] = matrix[last][last - i];

            console.log("matrix here is ", matrix)


            // console.log(matrix[last - i][st] , matrix[last][last - i])
            matrix[last][last - i] = matrix[st + i][last];

            console.log("matrix here is ", matrix)


            matrix[st + i][last] = temp;

            // console.log(matrix[st + i][last] , temp)
            console.log("matrix here is ", matrix)
        }
        st++;
        last--;
    }
    return matrix
};
