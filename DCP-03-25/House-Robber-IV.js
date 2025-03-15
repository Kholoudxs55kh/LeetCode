/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let left = nums.reduce((a, b) => Math.min(a, b))
    let right = nums.reduce((a, b) => Math.max(a, b))
    while (left < right) {
        let min = left + right >>> 1
        let res = 0
        for (let i = 0; i < nums.length && res < k; i++) if (nums[i] <= min) ++res && i++

        res >= k ? right = min : left = min + 1
    }
    return left
};