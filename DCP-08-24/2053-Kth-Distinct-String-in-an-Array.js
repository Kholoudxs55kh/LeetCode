/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = {};
    let target = 0;
    for (let ele of arr) {
        map[ele] = (map[ele] || 0) + 1;
    }

    for (let key in map) {
        if (map[key] === 1) target++;
        if (target === k) return key;
    }

    return '';
};