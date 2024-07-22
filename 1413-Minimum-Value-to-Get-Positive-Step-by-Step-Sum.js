/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let start = 1, sum = 0

    for (num of nums) {
        sum += num
        if (sum < 1) start = Math.max(1 - sum, start)
    }

    return start
};