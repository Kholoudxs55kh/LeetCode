/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    /**
    idea--> return merged array between 2 given arrays based on 2 conditions
    1st condition ids must be at least once in one of 2 arrays
    2nd condition id appears onces and its values is the sum between the values in other arrays for the same id 

    edge case--> n/a
    solution-->
    1st solution covert both arrays into dicts and add the 2 dicts
    nums1 = [[1,2],[2,3],[4,5]]
    dict = {'1':4,'2':3,'3':2,'4':6}

    2nd solution
    loop on both arrays with 2 pointer. each pointer hold the first ID of each array.
    if id1 = id2 add the values of them
    if id1 not equal id2 check the min id and append its value then move the pointer to next element
    */

    let i = 0, j = 0
    let res = []

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] === nums2[j][0]) {
            res.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++
            j++
        } else if (nums1[i][0] < nums2[j][0]) {
            res.push(nums1[i])
            i++
        } else {
            res.push(nums2[j])
            j++
        }
    }

    while (i < nums1.length) {
        res.push(nums1[i]);
        i++
    }

    while (j < nums2.length) {
        res.push(nums2[j])
        j++
    }

    return res
};