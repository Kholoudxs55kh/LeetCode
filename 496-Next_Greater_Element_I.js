/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        let equal = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) equal = true;
            
            if (equal && nums2[j] > nums1[i]) {
                res.push(nums2[j]);
                break;
            }

            if (equal && j === nums2.length - 1) res.push(-1);
        }
    }

    return res;
};


// Runtime 54ms Beats 90.06%
