/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let curr = 0, count = 0, longest = 0
    for (let i = 0; i < nums.length; i++) {
        while ((curr & nums[i]) !== 0) {
            curr = curr & ~nums[count];
            count++;
        }
        curr = curr | nums[i]
        longest = Math.max(longest, i - count + 1)
    }
    return longest
};