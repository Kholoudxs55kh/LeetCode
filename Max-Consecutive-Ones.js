/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let count = nums[0] === 1 ? 1 : 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1] && nums[i] === 1) count++;
        else {
            max = Math.max(max, count)
            if (nums[i + 2] === 1 || nums[i + 1] === 1) count = 1
        }
    }
    return Math.max(max, count)
};