/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    
    let output = 0
    let count = 0
    let _map = new Map([[0, -1]]);

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] ? 1 : -1;
        if (_map.has(count)) output = Math.max(output, i - _map.get(count));
        else _map.set(count, i);
    }
    return output;
};