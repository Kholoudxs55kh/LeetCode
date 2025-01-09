/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let counter = 0
    for (let word of words) {
        if (word.startsWith(pref)) counter++
    }

    return counter
};