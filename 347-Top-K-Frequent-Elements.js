/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const mapTracker = {}

    for (let i = 0; i < nums.length; i++) {
        mapTracker[nums[i]] ? mapTracker[nums[i]] += 1 : mapTracker[nums[i]] = 1
    }

    let sortedKeys = Object.keys(mapTracker).sort((a, b) => mapTracker[b] - mapTracker[a]);
    return sortedKeys.slice(0, k).map(Number);

};