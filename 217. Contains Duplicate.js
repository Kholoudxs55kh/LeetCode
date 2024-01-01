// Runtime 72ms
// Beats 85.61% of users with JavaScript

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const pure_arr = [...new Set(nums)]

    if (nums.length !== pure_arr.length) return true
    else return false
};