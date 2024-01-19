/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let dict_ = {
        0: 1
    }
    
    let total = 0;
    let sum = 0;   
    for(let num of nums) {
        sum += num;
        
        if(dict_[sum - k]) {
            total += dict_[sum - k];
        } 
        dict_[sum] = (dict_[sum] || 0) + 1; // || op
    }

    return total;
};
