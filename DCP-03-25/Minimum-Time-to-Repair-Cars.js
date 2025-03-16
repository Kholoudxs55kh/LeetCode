/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    let count = 0

    words = words.map((curr) => {
        let set = new Set([...curr])
        let arr = Array.from(set)
        arr.sort((a, b) => {
            if (a < b) return -1
            else return 1
        })
        return arr.join('')
    })

    let pairs = words.reduce((map, cur) => map.set(cur, map.get(cur) + 1 || 1), new Map())

    for (let pair of pairs.values()) count += (pair * (pair - 1)) / 2

    return count
};