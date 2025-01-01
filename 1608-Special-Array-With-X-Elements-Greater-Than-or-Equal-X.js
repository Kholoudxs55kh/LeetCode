/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    /**
     - Idea:
        - x = ele's nums that are greater or equal to it
        - exists a number x such that there are exactly x numbers in nums
        - [3,5]
            x = 0 --
            x = 1 --
            x = 2 ++
        - [0,0]
            x = 0
            eles = 2
            x = -1


     - Edge Cases: 
        - [0]
        - x => 0
        - ele => 1 -- => return -1

        - [3]
        - x => 1
        - ele => 1 ++  => return 1


    - [7, 9 , 35, 12, 45, 65, 110, 123 , 648, 756, 234]
        - x range 1, nums.length - 1 (On)
        - itterate over the array to compare (On)

    sort  =>  half length
        x = 0 --
        x = 1
        x = 6 = > 7, 9, 35, 12, 45, 65


     - Approach
        - to loop over the array 
        - to nest a loop to loop with x's val
        - count the eles that are >= x
        - if count == x return count
        - not, consider another x

        length => 10
        x = 5 >>
        x = 7 <<
        x = 6
        O1 => 7 steps

     */

    nums.sort((a, b) => a - b)

    // for (let x = 0; x <= nums.length; x++) {
    //     let count = 0;

    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] >= x) count++;
    //     }

    //     if (count === x) return x;

    // }


    // ======== Optimized 1 ========

    // for (let x = 0; x <= nums.length; x++) {
    //     let left = 0, right = nums.length - 1;

    //     while (left <= right) {
    //         let mid = Math.floor((left + right) / 2);

    //         if (nums[mid] >= x) right = mid - 1;
    //         else left = mid + 1;
    //     }

    //     let count = nums.length - left;

    //     if (count === x) return x;

    // }

    // ======== Optimized 2 ========

    let left = 0, right = nums.length;

    while (left <= right) {
        const x = Math.floor((left + right) / 2);

        let idx = 0;
        while (idx < nums.length && nums[idx] < x) {
            idx++;
        }

        const count = nums.length - idx;

        if (count === x) return x;


        if (count < x) right = x - 1;
        else left = x + 1;

    }

    return -1;
};