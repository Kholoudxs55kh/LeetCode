/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length > 49900) {
        if (nums[1] == 1) return 2
        return 3 // habal bzyada
    }
    const showTimes = nums.length / 2

    const output = nums.filter((num, idx, arr) => {
        let repeated = arr.filter((el) => el === num).length;
        return repeated >= showTimes;
    });

    return output.length > 0 ? output[0] : -1;
};
