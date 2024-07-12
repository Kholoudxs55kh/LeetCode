/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let acronym = ""
    for (word of words) {
        acronym += word[0]
    }

    if (acronym === s) return true

    return false
};

// Runtime 77ms Beats 86.83%
