/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
    let res = 0
    let curr = ''
    for (let char of s) {
        if (Number(char) > k) return -1

        if (Number(curr + char) > k) {
            res++
            curr = char
        }
        else curr += char
    }
    if (Number(curr) <= k) res++

    return res
};