/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    let arr = [], idx = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            arr[idx++] = sum;
        }
    }
    arr.sort((a, b) => a - b);
    let res = arr.slice(left - 1, right).reduce((acc, cur) => acc + cur, 0);
    return res % (Math.pow(10, 9) + 7);
};