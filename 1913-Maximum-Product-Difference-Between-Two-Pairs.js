/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    if (!nums.length || nums.length < 3) return 0

    nums.sort((a,b) => a - b)

    let first = nums[0] * nums[1]
    let second = nums[nums.length - 1] * nums[nums.length - 2]

    return second - first
};