/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let dict_ = {}
    for(let num of arr) dict_[num] = (dict_[num] || 0) + 1 
    
    let keys = Object.keys(dict_).sort((a, b) => dict_[a] - dict_[b]) 

    let i 
    for(i= 0; i < keys.length; i++){
        k -= dict_[keys[i]] 
        if (k < 0) break

    }
    return keys.length - i
};