/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let times = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        times[i] = times[i - 1] + times[i - 2];
    }

    return times[n];
};
