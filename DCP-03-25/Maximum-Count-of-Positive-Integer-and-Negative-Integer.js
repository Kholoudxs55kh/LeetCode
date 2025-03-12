/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0, neg = 0
    for (let val of nums) {
        pos += val > 0
        neg += val < 0
    }
    return Math.max(pos, neg);
};