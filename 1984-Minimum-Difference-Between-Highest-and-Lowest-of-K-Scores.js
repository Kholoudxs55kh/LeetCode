/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    /**
    Idea:
        get the min diff between K eles from the main whole eles
    Edge Cases:
        -- if K == 1 return 0
        -- if k === nums.length return the diff between the 1st and last of the sorted nums
    Approach:
    //  [3, 5, 11] 
    //  2 or 6? 

    [90, 12, 15, 88, 50]

    90 - 12 - 15 = 63
    90 - 12 - 88 = -10  => 90 - 12 || 90 - 88 => 88 - 12 
                            78          2           
    90 - 12 - 50 = 28
    90 - 15 - 88 = -13
    9

    90 - 12 

    [90, 12, 15, 88, 50]

    [90, 88, 50, 15, 12] => 
        2  38  35   3    => 78


    [90, 88, 50, 15, 12, 1] => 
        2  38  35   3  11   => 78 + 11 = 89


    [90, 88, 50, 15, 12, 1] => [1, 12, 15]  => 14
                               [12, 15, 50] => 38
                               [90, 88, 50] => 40

    [90, 88, 50, 15, 12, 1, 89] => [1, 12, 15]  => 14
                                    [12, 15, 50] => 38
                                    [90, 88, 50] => 40
                                    [90, 89, 88] => 2

    K will only determine the length of the subarr
    i can sort the whole arr, or sort the subarr 
    get the difference between the 0 and k - 1 of subarr
    variable holding the minimum value and comparing it
    return that var


    for (i)
        for (i)
            subarray(i ,k)
    */

    if (k === 1) return 0;
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        const subarray = nums.slice(i, i + k);
        const currentDiff = subarray[k - 1] - subarray[0]
        if (currentDiff < minDiff) minDiff = currentDiff;
    }
    return minDiff;
};

