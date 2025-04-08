/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    if (new Set(nums).size === nums.length) return 0

    const set = new Set()

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) return Math.ceil((i + 1) / 3)

        set.add(nums[i])
    }

    return 0
};