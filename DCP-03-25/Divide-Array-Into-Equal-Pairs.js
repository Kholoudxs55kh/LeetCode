/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let freq = {}

    for (let num of nums) freq[num] = (freq[num] || 0) + 1

    for (let num of nums) {
        if (freq[num] % 2 !== 0) return false
    }
    return true
};