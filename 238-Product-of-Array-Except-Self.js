/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);
    let leftP = 1;
    let rightP = 1;

    for (let i = 0; i < n; i++) {
        answer[i] *= leftP;
        leftP *= nums[i];

        answer[n - 1 - i] *= rightP;
        rightP *= nums[n - 1 - i];
    }

    return answer;
};
