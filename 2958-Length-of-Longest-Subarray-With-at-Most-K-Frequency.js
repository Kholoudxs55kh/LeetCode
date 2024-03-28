/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = {};
    let i = 0, j = 0, maxLen = 1;
    const len = nums.length;

    while (j < len) {
        const el = nums[j];
        freq[el] = freq[el] ? freq[el] + 1 : 1;
        while (freq[el] > k) {
            const remove = nums[i];
            freq[remove] = freq[remove] ? freq[remove] - 1 : 0;
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);

        j++;
    }
    return maxLen;
};