/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let doubled = -1, missed = -1;
    
    for (let i = 1; i <= nums.length; i++) {
        let count = nums.filter(num => num === i).length;
        if (count === 2) {
            doubled = i;
        } else if (count === 0) {
            missed = i;
        }
    }
    
    return [doubled, missed];
};