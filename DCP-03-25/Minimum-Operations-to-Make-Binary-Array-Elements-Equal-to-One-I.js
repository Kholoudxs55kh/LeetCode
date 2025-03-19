/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            count += 1
            nums[i] = 1
            nums[i + 1] = 1 - nums[i + 1]
            nums[i + 2] = 1 - nums[i + 2]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return -1
    }
    return count
};