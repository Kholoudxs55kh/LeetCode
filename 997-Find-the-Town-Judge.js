/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) return 1

    let arr_ = new Array(n + 1).fill(0);

    for (i of trust) {
        arr_[i[0]]--;
        arr_[i[1]]++
    }

    for (let j = 0; j <= n; j++) {
        if (arr_[j] === n - 1) return j
    }

    return -1
};