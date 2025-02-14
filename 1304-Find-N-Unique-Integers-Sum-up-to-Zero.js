/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let sum = 0, res = []
    for (let i = 1; i < n; i++) {
        res.push(i)
        sum += i
    }
    res.push(-sum)
    return res
};