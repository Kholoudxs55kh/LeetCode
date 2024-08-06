/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let map = {}, count = 0, res = 0

    for (let char of word) map[char] = (map[char] || 0) + 1;

    let values = Object.values(map);
    values.sort((a, b) => b - a);

    for (i = 0; i < values.length; i++) {
        res += (Math.floor(count / 8) + 1) * values[i];
        count++;
    }
    return res
};