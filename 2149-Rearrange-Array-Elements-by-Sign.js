/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const pos = []; 
    const neg = []; 
    const res = []

    for (const num of nums) {
        if (num > 0) pos.push(num); 
        else neg.push(num); 

    }
    
    let i = 0, j = 0, k = 0; 
    
    while (i < pos.length && j < neg.length) {
        res[k++] = pos[i++]; 
        res[k++] = neg[j++];
    }
    
    while (i < pos.length) {
        res[k++] = pos[i++];
    }
    
    while (j < neg.length) {
        res[k++] = neg[j++];
    }
    
    return res;
};