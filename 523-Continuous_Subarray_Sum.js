/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let remainderIndex = {0: -1};

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let mod = sum % k;

        if (mod < 0) mod += k;

        if (remainderIndex.hasOwnProperty(mod)) {
            if (i - remainderIndex[mod] > 1) return true;
        } 
        else remainderIndex[mod] = i;
    }

    return false;
};


// Runtime 98ms Beats 88.39%
