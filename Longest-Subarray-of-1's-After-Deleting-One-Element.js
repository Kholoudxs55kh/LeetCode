/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let i = 0, j = 0, count = 1, max = 0;
    while (j < nums.length) {
        if (nums[j] === 0) count--;
        while (count < 0 && i < nums.length) {
            if (nums[i] === 0) count++;
            i++;
        }
        max = Math.max(max, j - i);
        j++;
    }
    return max;
};