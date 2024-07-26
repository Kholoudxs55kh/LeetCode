/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    nums.sort((a, b) => a - b)
    const min = nums[0];
    const max = nums[nums.length - 1];

    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > min && nums[i] < max) {
            count++;
        }
    }

    return count;
};