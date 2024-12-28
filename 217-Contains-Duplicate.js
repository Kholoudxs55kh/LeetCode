/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    /**
    main target => check if avalue is repeated

    [1,2,3,1]
    - store every ele as a key and a val of 1 ||| karem's idea
    - check the next ele to find if it is repeated
    - if repeated increase its val
    - check the val if any key has any BUT 1 return true
    - if okay return false
     */
    const countMap = {};
    for (let num of nums) {
        if (countMap[num]) return true;
        countMap[num] = 1;
    }

    return false;
};