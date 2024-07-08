/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};

    for (let num of nums) {
        if (map[num]) map[num] = map[num] + 1;
        else map[num] = 1;
    }

    // console.log(map);

    let sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a]);

    // console.log(sortedKeys)
    return sortedKeys.slice(0, k).map(Number);

};

// Runtime 69ms Beats 59.19%
