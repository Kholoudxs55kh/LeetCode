/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let start = 0;

    let minLength = Number.MAX_SAFE_INTEGER;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (start <= end && sum >= target) {

            let currLength = end - start + 1;
            minLength = Math.min(minLength, currLength);
            sum -= nums[start];
            start++;
        }
    }

    if (minLength === Number.MAX_SAFE_INTEGER) return 0;

    return minLength;
};