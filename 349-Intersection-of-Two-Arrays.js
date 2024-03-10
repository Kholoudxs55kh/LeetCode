/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let new_arr = new Set();
    const set1 = new Set(nums1);
    for (let num of nums2){
        if (set1.has(num)) new_arr.add(num);
    }
    return Array.from(new_arr);
};
