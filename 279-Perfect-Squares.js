/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr = new Array(n + 1);

    arr.fill(Number.MAX_SAFE_INTEGER);

    arr[0] = 0;
    
    for(let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
        }
    }
    
    return arr[n];
};