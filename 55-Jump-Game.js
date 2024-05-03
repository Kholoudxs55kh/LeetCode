/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // length => 1 -> i'll reach the last 
    if (nums.length === 1) return true

    // length is larger than 1
    target = nums.length - 1 // 4 
    // 3
    for (let end = nums.length - 2; end >= 0; end--) {
            // 3 + 1 >= 4 ===> idx = 3
            // 2 + 1 >=  3 ===> idx = 2
            // 1 + 3 >= 2 ===> idx = 1
            // 0 + 2 >= 1 ==> done
        if (end + nums[end] >= target) target = end
    }

    return target === 0 
};