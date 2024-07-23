/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let frequencies = {};
    let mostFrequentNum = -1;
    let maxCount = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            let target = nums[i + 1];
            if (frequencies[target] === undefined) {
                frequencies[target] = 1;
            } else {
                frequencies[target]++;
            }
            
            if (frequencies[target] > maxCount) {
                maxCount = frequencies[target];
                mostFrequentNum = target;
            }
        }
    }
    
    return mostFrequentNum;
};