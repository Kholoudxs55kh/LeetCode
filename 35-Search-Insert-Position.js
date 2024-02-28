/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0\t\t\t\t\t\t\t\t\t\t\t\t\t
    while (i < nums.length) {   
        if (nums[i] == target || nums[i] > target)\t\t\t\t
            return i
        i += 1
    }
    return i
};