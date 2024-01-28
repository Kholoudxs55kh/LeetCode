/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const robbedHouses = [nums[0]];
    const skippedHouses = [0]; 

    if (nums.length === 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        robbedHouses[i] = skippedHouses[i - 1] + nums[i];
        skippedHouses[i] = Math.max(robbedHouses[i - 1], skippedHouses[i - 1]);
    }
    const max = Math.max(robbedHouses[nums.length - 1], skippedHouses[nums.length - 1])

    return max;
};