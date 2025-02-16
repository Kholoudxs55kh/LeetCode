/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let visited = new Map();
    let count = 0;

    dominoes.forEach(domino => {
        domino.sort((a, b) => a - b);
        let dominoStr = domino.join('')
        if (visited.get(dominoStr)) {
            count += visited.get(dominoStr);
            visited.set(dominoStr, visited.get(dominoStr) + 1)
        }
        else
            visited.set(dominoStr, 1)
    })
    return count;
};