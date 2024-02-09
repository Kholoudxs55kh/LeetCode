/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let start = 0;
    let end = arr.length - k;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (x - arr[mid] > arr[mid + k] - x) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return arr.slice(start, start + k);
};