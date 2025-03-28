/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = {}

    for (let i = 0; i < order.length; i++) map[order[i]] = i + 1


    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) return false

            if (words[i][j] === words[i + 1][j]) continue

            if (map[words[i][j]] > map[words[i + 1][j]]) return false

            break
        }
    }

    return true;
};