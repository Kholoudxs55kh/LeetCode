/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0, odd = 1, res = [], i = 0;

    while (i < nums.length) {
        if (nums[i] % 2 === 0) {
            res[even] = nums[i]
            even += 2
        } else {
            res[odd] = nums[i]
            odd += 2
        }

        i++
    }

    return res
};